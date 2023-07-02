import React from "react";

export const Header = () => {
  return (
    <>
      <div className="p-10 border-b border-gray-200">
        <span className="text-gray-700 text-small-regular uppercase">
          Thank you, your order was successfully placed
        </span>
        <h1 className="mt-2 uppercase text-2xl-semi">#3</h1>
        <span>01H4BZCBFEXAKPWKVD6MFDJ78P</span>
        <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
          <span>Sun Jul 02 2023</span>
          <span>1 item</span>
        </div>
      </div>
      <div className="p-10 border-b border-gray-200 gap-y-4 flex flex-col">
        <div className="grid grid-cols-[122px_1fr] gap-x-4">
          <div className="w-[122px]">
            <div className="relative aspect-[29/34] w-full">
              <img
                alt="Thumbnail"
                draggable="false"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0"
                sizes="100vw"
                srcSet="/_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=3840&q=75 3840w"
                src="/_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Ftee-black-front.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  objectPosition: "center center",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col flex-1 text-small-regular">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4">
                    <a href="/products/t-shirt">Medusa T-Shirt</a>
                  </h3>
                  <div className="text-small-regular text-gray-700">
                    <div>
                      <span>Size: M</span>
                    </div>
                    <div>
                      <span>Color: White</span>
                    </div>
                  </div>
                  <span>Quantity: 1</span>
                </div>
                <div className="flex justify-end">
                  <div className="flex flex-col text-gray-700 text-right">
                    <span className="text-base-regular">€19.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
