import React from "react";
import { useParams } from "react-router-dom";
const data = {
  ev3: {
    name: "EV3",
    description: "2024-05-23 발표",
    imgurl: "https://cdn.autoherald.co.kr/news/photo/202312/52158_95280_2125.jpg"
  },
  ev5: {
    name: "EV5",
    description: "2025년 출시 예정",
    imgurl: "https://i.namu.wiki/i/nhJJsB4542kNs0IE1E-XcvtevBO4qcZrQ2t79DmrOr2NxYjfIMJyHVIpQivGxer6bWy7seWX8TWVjABmkKPuZA.webp"
  },
  ev9: {
    name: "EV9",
    description: "2023년 출시",
    imgurl: "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/ev9/24my/ev9_feature_bg_pc.jpg"
  }
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>Model</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <img src={profile.imgurl}></img>
        </div>
      ) : (
        <p>존재하지 않는 차량입니다.</p>
      )}
    </div>
  );
};
export default Profile;
