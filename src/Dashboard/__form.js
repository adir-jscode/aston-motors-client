<form action="" onSubmit={handleSubmit(onSubmit)}>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <input
      type="text"
      placeholder="email"
      class="input input-bordered"
      {...register(
        "email",
        { value: `${user?.email}` },
        {
          required: {
            value: true,
            message: "Please enter your name",
          },
        }
      )}
    />
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Name</span>
    </label>
    <input
      type="text"
      placeholder="name"
      disabled
      class="input input-bordered"
      {...register(
        "name",
        { value: `${user?.displayName}` },
        {
          required: {
            value: true,
            message: "Please enter your name",
          },
        }
      )}
    />
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Education</span>
    </label>
    <input
      type="text"
      placeholder="Education"
      value={profile?.education || ""}
      class="input input-bordered"
      {...register(
        "education",
        //   {
        //     onchange: (e) => setEducation(e.target.value),
        //   },

        //   { value: `${profile?.education} || ''  ` },
        {
          required: {
            value: true,
            message: "Please enter your education",
          },
        }
      )}
    />
    <label class="label">
      {errors?.education?.type === "required" && (
        <span className="text-red-700">{errors?.education.message}</span>
      )}
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Location</span>
    </label>
    <input
      type="text"
      value={profile?.location || ""}
      placeholder="Location"
      class="input input-bordered"
      {...register(
        "location"
        //   { value: `${profile?.location} || ''  ` }
        //   {
        //     required: {
        //       value: true,
        //       message: "Please enter your location",
        //     },
        //   }
      )}
    />
    <label class="label">
      {errors?.location?.type === "required" && (
        <span className="text-red-700">{errors?.location.message}</span>
      )}
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Phone Number</span>
    </label>
    <input
      type="text"
      value={profile?.phone || ""}
      placeholder="Phone"
      class="input input-bordered"
      {...register(
        "phone"
        //   { value: `${profile?.phone} || '' ` }
        //   {
        //     required: {
        //       value: true,
        //       message: "Please enter your phone number",
        //     },
        //   }
      )}
    />
    <label class="label">
      {errors?.phone?.type === "required" && (
        <span className="text-red-700">{errors?.phone.message}</span>
      )}
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">LinkedIn</span>
    </label>
    <input
      type="text"
      value={profile?.social || ""}
      placeholder="LinkedIn"
      class="input input-bordered"
      {...register(
        "social",
        //   { value: {profile?.social} || "" },
        {
          //   required: {
          //     value: true,
          //     message: "Please enter your social link",
          //   },
        }
      )}
    />
    <label class="label">
      {errors?.social?.type === "required" && (
        <span className="text-red-700">{errors?.social.message}</span>
      )}
    </label>
  </div>
  <div class="text-center mx-auto ">
    <input
      className="btn btn-primary mt-5 w-full max-w-xs text-white"
      type="submit"
      value="Update"
    />
  </div>
</form>;


import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import avatar from "../assets/images/avatar.png";
import { useQuery } from "react-query";
import ProfileUpdateModal from "./ProfileUpdateModal";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);

  const {
    isLoading,
    data: currentUser,
    refetch,
  } = useQuery("users", () =>
    fetch(
      `https://gentle-ridge-79225.herokuapp.com/currentUser?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" h-full">
      <div className="px-5 text-primary">
        <div className="w-5/6   h-full pb-10 mx-auto">
          <div className=" pt-10 flex-col ">
            <div className="avatar online">
              <div className="w-32 rounded-full">
                <img src={user?.photoURL ? user.photoURL : avatar} alt="" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold   mt-5 ">
              {user?.displayName}
            </h1>
            <p className="flex items-center">
              <FontAwesomeIcon className="w-4 h-4 mr-2" icon={faEnvelope} />
              <span>{user?.email}</span>
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between  mx-auto mt-10">
              <div className="  ">
                <h2 className="text-2xl font-semibold  ">Information</h2>
                <p className="mt-3 flex text-[15px] items-center">
                  <FontAwesomeIcon
                    className="w-4 h-4 mr-2  text-slate-800"
                    icon={faUser}
                  />
                  {user?.displayName}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <FontAwesomeIcon
className="w-4 h-4 mr-2  text-slate-800"
                    icon={faEnvelope}
                  />
                  {user?.email}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <FontAwesomeIcon
                    className="w-4 h-4 mr-2  text-slate-800"
                    icon={faPhone}
                  />
                  +88-{currentUser.phone ? currentUser.phone : 12345678}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <FontAwesomeIcon
                    className="w-4 h-4 mr-2  text-slate-800"
                    icon={faLocationDot}
                  />
                  {currentUser.address? currentUser.address
                    : "No address given"}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <FontAwesomeIcon
                    className="w-4 h-4 mr-2 text-slate-800"
                    icon={faBookOpen}
                  />
                  {currentUser.study
                    ? currentUser.study
                    : "Study info not given"}
                </p>
              </div>
              <div className="font-koulen mt-5 md:mt-0">
                <h2 className="text-3xl font-semibold text-gray-700 ">
                  Social Media
                </h2>
                <p className="mt-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-current rounded-full mx-2"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  <span className="text-sm italic">
                    {currentUser.fb
                      ? currentUser.fb
                      : "Facebook info not given"}
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"


