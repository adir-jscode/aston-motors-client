import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const UpdateModal = ({ refetch, profile, setUpdate }) => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const userInfo = {
      email: data.email,
      name: data.name,
      location: data.location,
      phone: data.phone,
      education: data.education,
      social: data.social,
    };
    fetch(`http://localhost:5000/profile/${user.email}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("data updated successfully");
          setUpdate(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h1 class="text-3xl text-center text-pink-500 font-bold">
            Update Your Profile
          </h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                disabled
                class="input input-bordered"
                {...register(
                  "email",
                  { value: `${user.email}` },
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
                  { value: `${user.displayName}` },
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
                class="input input-bordered"
                {...register(
                  "education",
                  { value: `${profile.education}` },
                  {
                    //   required: {
                    //     value: true,
                    //     message: "Please enter your education",
                    //   },
                  }
                )}
              />
              <label class="label">
                {errors?.education?.type === "required" && (
                  <span className="text-red-700">
                    {errors?.education.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                class="input input-bordered"
                {...register(
                  "location",
                  { value: `${profile.location}` },
                  {
                    //   required: {
                    //     value: true,
                    //     message: "Please enter your location",
                    //   },
                  }
                )}
              />
              <label class="label">
                {errors?.location?.type === "required" && (
                  <span className="text-red-700">
                    {errors?.location.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                class="input input-bordered"
                {...register(
                  "phone",
                  { value: `${profile.phone}` }
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
                placeholder="LinkedIn"
                class="input input-bordered"
                {...register(
                  "social",
                  { value: `${profile.social}` },
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
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn btn-error">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
