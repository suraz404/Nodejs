import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-bold text-black">
            S
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Enter your details below to get started.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-2xl sm:p-8">
          <form className="space-y-5">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-zinc-200"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="Suraj"
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-200"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Agrahari"
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
                />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-zinc-200"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
                placeholder="suraz404"
                className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-200"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-200"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 accent-white"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-5 text-zinc-400"
              >
                I agree to the{" "}
                <span className="cursor-pointer text-white hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-white hover:underline">
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-white text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* GitHub */}
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-950 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Continue with GitHub
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-white hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
