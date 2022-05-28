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
