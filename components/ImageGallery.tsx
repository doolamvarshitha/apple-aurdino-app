import Image from "next/image";

export default function ImageGallery() {
  const images = [
    {
      src: "https://shopix.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F944684a5-7ddb-4adf-8e5b-3e5a5229b4ff%2F12d70107-64c8-4e35-b12c-638522c4f6e6%2Fimage.png?table=block&id=15793756-4501-805b-a0b0-c99b8ad70005&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&width=660&userId=&cache=v2",
      alt: "Apple Watch Studio UI - Image 1",
    },
    {
      src: "https://shopix.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F944684a5-7ddb-4adf-8e5b-3e5a5229b4ff%2F68f8f7b4-7e59-48ed-8243-03caaec07c16%2Fimage.png?table=block&id=15793756-4501-8043-bbd9-e68b8d5aef2d&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&width=660&userId=&cache=v2",
      alt: "Apple Watch Studio UI - Image 2",
    },
    {
      src: "https://shopix.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F944684a5-7ddb-4adf-8e5b-3e5a5229b4ff%2Fff463570-f964-4994-81f5-8d2328cbce8e%2Fimage.png?table=block&id=15793756-4501-80c3-bc6a-d37b8b7a6b89&spaceId=944684a5-7ddb-4adf-8e5b-3e5a5229b4ff&width=660&userId=&cache=v2",
      alt: "Apple Watch Studio UI - Image 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
}
