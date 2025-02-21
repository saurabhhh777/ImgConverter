// import React from "react";
const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[#deded5]">
      <h1 className="h-[10%] justify-center items-center text-4xl font-bold">
        About Us
      </h1>
      <div className="h-[80%] w-[80%] bg-[#1b1b1f] flex flex-col rounded-2xl p-24">
        <div className="font-serif">
          Welcome to ImageConverter, your one-stop solution for fast and
          reliable image conversions. Whether you need to convert JPG to PNG,
          PNG to JPG, JPG to PDF, PNG to PDF, or compress large images without
          sacrificing quality—we’ve got you covered!
        </div>
        <br />
        <div className="font-serif">
          Our mission is simple: make image conversion effortless for everyone.
          We understand how frustrating it can be to deal with file format
          issues or oversized images. That’s why we built ImageConverter—to help
          users like you save time and optimize your workflow.
        </div>
        <br />
        <div className="font-semibold text-xl">Why Choose Us?</div>
        <br />
        <ul>
          <li>User-Friendly Interface: Convert images in just a few clicks.</li>
          <li>High-Speed Processing: Get your converted files in seconds.</li>
          <li>
            Quality Preservation: Maintain the original quality while reducing
            file size.
          </li>
          <li>
            Secure & Private: Your files are safe with us. We don’t store or
            share your data.
          </li>
        </ul>
        <br />
        <div className="font-serif">
          Whether you’re a student, designer, developer, or content creator,
          ImageConverter is here to simplify your digital life. Our tools are
          constantly evolving to meet the growing needs of our users. Thank you
          for choosing ImageConverter! We’re excited to be part of your journey.
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
