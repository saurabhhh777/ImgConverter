const Footer = () => {
  return (
    <div className="text-white box-border">
      <div className="flex flex-row justify-between m-20">
        <div className="flex flex-col text-center">
          <h2 className="font-poppin text-xl font-semibold pb-3">
            Image Tools
          </h2>
          <div>
            <h2 className="pb-2">Image Resizer</h2>
            <h2 className="pb-2">Bulk Image Resizer</h2>
            <h2 className="pb-2">Image Compressor</h2>
            <h2 className="pb-2">Crop Image</h2>
            <h2 className="pb-2">Collage Maker</h2>
            <h2 className="pb-2">Flip Image</h2>
            <h2 className="pb-2">Rotate Image</h2>
            <h2 className="pb-2">Image Enlarger</h2>
            <h2 className="pb-2">Color Picker</h2>
            <h2 className="pb-2">Meme Generator</h2>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="font-poppin text-xl font-semibold pb-3">Convert</h2>
          <div>
            <h2 className="pb-2">Image Converter</h2>
            <h2 className="pb-2">PDF to JPG</h2>
            <h2 className="pb-2">HEIC to JPG</h2>
            <h2 className="pb-2">SVG Converter</h2>
            <h2 className="pb-2">PDF to PNG</h2>
            <h2 className="pb-2">PNG to SVG</h2>
            <h2 className="pb-2">WebP to JPG</h2>
            <h2 className="pb-2">PNG to JPG</h2>
            <h2 className="pb-2">JPG to PNG</h2>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="font-poppin text-xl font-semibold pb-3">PDF Tools</h2>
          <div>
            <h2 className="pb-2">Compress PDF</h2>
            <h2 className="pb-2">PDF Converter</h2>
            <h2 className="pb-2">Image to PDF</h2>
            <h2 className="pb-2">JPG to PDF</h2>
            <h2 className="pb-2">PNG to PDF</h2>
            <h2 className="pb-2">PDF to GIF</h2>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins text-xl font-semibold pb-3">About</h2>
          <div className="space-y-2">
            <h2 className="pb-2">About Us</h2>
            <h2 className="pb-2">Contact Us</h2>
            <h2 className="pb-2">Privacy Policy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
