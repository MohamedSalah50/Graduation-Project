import React from "react";
import Avatar from "./Avatar";

import {
  HiOutlineFire,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBell,
} from "react-icons/hi2";

export default function NavBar() {
  return (
    <div className="">
      <ul className="border-bottom d-flex align-items-center nav justify-content-end bg-body-tertiary p-3 gap-3">
        <li>
          <Avatar src="https://picsum.photos/200" alt="avatar" />
        </li>
        <li>
          <span className="fw-bold">profile</span>
        </li>
        <li>
          <span>
            <HiOutlineBell size={20} />
          </span>
        </li>
        <li>
          <span>
            <HiOutlineFire size={20} />
          </span>
        </li>
        <li>
          <span>
            <HiOutlineArrowRightOnRectangle size={20} />
          </span>
        </li>
      </ul>
    </div>
  );
}
