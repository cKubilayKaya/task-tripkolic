import Image from "next/image";
import React from "react";
import data from "@/data";
import { useRouter } from "next/router";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TbRosetteDiscountOff } from "react-icons/tb";
import { MdPriceCheck } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { FaCarAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { RiGroup3Fill } from "react-icons/ri";

export default function CardDetail() {
  const router = useRouter();
  const { card } = router.query;
  const cardDetail = data?.find((i) => parseInt(i?.id) === parseInt(card));

  return (
    <div className="card-detail container">
      <div className="card-detail-header d-flex justify-content-between">
        <div className="card-detail-title">
          <h3>{cardDetail?.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti laudantium voluptatum doloribus quos facilis sapiente voluptatem nobis
            quasi numquam at placeat porro, tenetur inventore repudiandae assumenda dolorem culpa nisi!
          </p>
        </div>
        <div className="card-detail-image-wrapper">
          <Image src={cardDetail?.imageSrc} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="card-detail-content">
        <h4>Detaylar</h4>
        <div className="card-detail-items d-flex justify-content-between">
          <div className="card-detail-items-left">
            <div className="card-detail-item">
              <BiSolidCategoryAlt size={20} />
              <p>
                Category: <span>{cardDetail?.category}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <TbRosetteDiscountCheckFilled size={20} />
              <p>
                Discount: <span>{cardDetail?.discount}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <FaStar size={20} />
              <p>
                Star Count: <span>{cardDetail?.starCount}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <FaCommentAlt size={20} />
              <p>
                Comment Count: <span>{cardDetail?.commentCount}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <HiLocationMarker size={20} />
              <p>
                Location: <span>{cardDetail?.location}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <TbRosetteDiscountOff size={20} />
              <p>
                Old Price: <span>{cardDetail?.oldPrice}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <MdPriceCheck size={20} />
              <p>
                Price: <span>{cardDetail?.price}</span>
              </p>
            </div>
          </div>
          <div className="card-detail-items-right">
            <div className="card-detail-item">
              <MdCategory size={20} />
              <p>
                Theme: <span>{cardDetail?.theme}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <RxActivityLog size={20} />
              <p>
                Activity: <span>{cardDetail?.activity}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <FaCarAlt size={20} />
              <p>
                Vehicle: <span>{cardDetail?.vehicle}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <FaRegNewspaper size={20} />
              <p>
                Features:{" "}
                {cardDetail?.features?.map((i, index) => (
                  <span key={index}>
                    {i}
                    {index < cardDetail.features.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
            <div className="card-detail-item">
              <FaClock size={20} />
              <p>
                Start Time: <span>{cardDetail?.startTime}</span>
              </p>
            </div>
            <div className="card-detail-item">
              <RiGroup3Fill size={20} />
              <p>
                Group Size: <span>{cardDetail?.groupSize}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
