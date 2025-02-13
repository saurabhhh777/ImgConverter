import { useState, useRef, useEffect } from "react";
import axios from "axios";

interface ConversionState {
  isLoading: boolean;
  error: string | null;
  convertedUrl: string | null;
}

function Heictopng() {
  const [state, setState] = useState<ConversionState>({
    isLoading: false,
    error: null,
    convertedUrl: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      if (state.convertedUrl) {
        URL.revokeObjectURL(state.convertedUrl);
      }
    };
  }, [state.convertedUrl]);

  const handleConvert = async (file: File) => {
    if (!file) return;

    setState({ isLoading: true, error: null, convertedUrl: null });

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:3000/api/v1/heic/heictojpg", // Ensure the API endpoint is correct
        formData,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const url = URL.createObjectURL(response.data);
      setState({
        isLoading: false,
        error: null,
        convertedUrl: url,
      });
    } catch (error) {
      console.error("Conversion error:", error);
      let errorMessage = "⚠️ Failed to convert file. Please try again.";
      
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }

      setState({
        isLoading: false,
        error: errorMessage,
        convertedUrl: null,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      const mimeType = file.type;

      // Check for HEIC/HEIF files
      if (
        fileExtension && !["heic", "heif"].includes(fileExtension) &&
        !["image/heic", "image/heif"].includes(mimeType)
      ) {
        setState({
          isLoading: false,
          error: "⚠️ Only HEIC/HEIF files are allowed",
          convertedUrl: null,
        });
        return;
      }

      handleConvert(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        HEIC to PNG Converter
      </h1>

      <div
        className="w-full max-w-md p-6 border-2 border-dashed border-gray-400 bg-white rounded-lg text-center cursor-pointer hover:border-blue-500"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept=".heic,.heif"
          onChange={handleFileChange}
          ref={fileInputRef}
          disabled={state.isLoading}
          className="hidden"
        />
        <p className="text-gray-600">Click to select HEIC/HEIF file</p>
      </div>

      {/* Loading Indicator */}
      {state.isLoading && (
        <div className="mt-4 flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
          <p className="text-blue-600">Converting...</p>
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <div className="mt-4 text-red-600 font-medium">{state.error}</div>
      )}

      {/* Converted Image & Download */}
      {state.convertedUrl && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">Converted Image</h2>
          <img
            src={state.convertedUrl}
            alt="Converted PNG"
            className="mt-2 w-60 h-auto rounded-lg shadow"
          />
          <a
            href={state.convertedUrl}
            download="converted.png"
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Download PNG
          </a>
          <button
            className="mt-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            onClick={() => {
              setState({ isLoading: false, error: null, convertedUrl: null });
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
          >
            Convert Another File
          </button>
        </div>
      )}
    </div>
  );
}

export default Heictopng;
