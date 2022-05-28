import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import UpdateModal from "./UpdateModal";

const Profile = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const [reload, setReload] = useState(false);
  const email = user?.email;
  const [update, setUpdate] = useState(null);
  const [edit, setEdit] = useState([]);

  // const {
  //   data: profile,
  //   isLoading,
  //   refetch,
  // } = useQuery(["profile", email], () =>
  //   fetch(`http://localhost:5000/profile?email=${email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       "content-type": "application/json; charset=utf",
  //     },
  //   }).then((response) => response.json())
  // );
  // if (isLoading || loading) {
  //   return <Loading></Loading>;
  // }

  useEffect(() => {
    fetch(`http://localhost:5000/profile?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json; charset=utf",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data.result.userInfo);
      });
  }, [reload]);
  return (
    <div>
      <h1 className="text-center text-5xl mt-5 text-pink-500 font-bold">
        My profile
      </h1>
      <div class="card mt-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Profile name: {user.displayName}</h2>
          <h2 class="card-title">Email: {user.email}</h2>
          <h2 class="card-title">Education: {profile?.education} </h2>
          <h2 class="card-title">Location: {profile?.location}</h2>
          <h2 class="card-title">Phone Number: {profile?.phone}</h2>
          <h2 class="card-title">LinkedIn: {profile?.social}</h2>
          <div class="card-actions justify-center">
            <label
              onClick={() => setUpdate(user)}
              for="my-modal-6"
              class="btn modal-button"
            >
              Update Profile
            </label>
          </div>
        </div>
        {update && (
          <UpdateModal
            reload={reload}
            setReload={setReload}
            setUpdate={setUpdate}
            profile={profile}
          ></UpdateModal>
        )}
      </div>
    </div>
  );
};

export default Profile;
