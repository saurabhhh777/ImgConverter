import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="h-[10%] justify-center items-center text-4xl font-bold">Contact US</h1>
      <div className="h-[80%] w-[80%] bg-[#E3EFFF] flex flex-col rounded-2xl p-24">
        <pre className="font-serif">
        We'd love to hear from you! Whether you have questions, feedback, or need assistance with our
        </pre>
        <br />
        <pre className="font-serif">
            image conversion services, feel free to reach out through any of the methods below.
        </pre>
        <br />
        <div className="font-semibold text-xl">
            Email:
        </div>
        <br />
        <pre className="font-serif">
            For general inquiries or support, please email us at <a href="mailto:saurabhhhere@gmail.com" className="text-blue-500">saurabhhhere@gmail.com</a>.
        </pre>
        <br />
        <div className="font-semibold text-xl">
            Website:
        </div>
        <br />
        <pre className="font-serif">
            Visit our personal website at <a href="https://www.asksaurabh.xyz" target="_blank" className="text-blue-500 hover:underline">www.asksaurabh.xyz</a> to learn more about our projects and services.
        </pre>
        <br />
      </div>
    </div>
  );
};

export default Contact;
