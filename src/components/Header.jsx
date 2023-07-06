import React from "react";
import userImg from "../img/User_Circle.svg";
import allPosts from "../img/Globe.svg";
import favorite from "../img/Heart.svg";
import addPost from "../img/Add_Plus_Circle.svg";

export default function Header() {
  return (
    <div className="w-full flex">

      <div className="fixed  w-[250px] h-full flex-col flex gap-11 justify-center border-r-4 border-Green-light bg-[#303030]  shadow-2xl ">
      <div className=" flex justify-center">
        <p>LOGO</p>
      </div>
        <div className=" flex ml-5 gap-2  items-center transition ease-in-out hover:text-Green-light ">
          <img src={userImg} alt="icon_user" />
          <p className=" text-xl cursor-pointer font-medium">Мой аккаунт</p>
        </div>
        <div className=" flex ml-5 gap-2 items-center transition ease-in-out hover:text-Green-light ">
          <img src={allPosts} alt="icon_allPosts" />
          <p className=" text-xl cursor-pointer font-medium">Все посты</p>
        </div>
        <div className=" flex ml-5 gap-2 items-center transition ease-in-out hover:text-Green-light ">
          <img src={favorite} alt="icon_favorite"/>
          <p className=" text-xl cursor-pointer font-medium">Подписки</p>
        </div>
        <div className=" flex ml-5 gap-2 items-center transition ease-in-out hover:text-Green-light ">
          <img src={addPost} alt="icon_addPost" />
          <p className=" text-xl cursor-pointer font-medium">Написать пост</p>
        </div>
      </div> 
    </div>
  );
}
