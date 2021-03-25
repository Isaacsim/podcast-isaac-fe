import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/form-error";
import {
  loginMutation,
  loginMutationVariables,
} from "../__generated__/loginMutation";

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token },
    } = data;
    if (ok === true) console.log(token);
  };
  const [logMutation, { data: loginMutationResult, loading }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmit = () => {
    if (loading !== undefined) {
      const { email, password } = getValues();
      logMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white w-full max-w-lg pt-8 pb-5 rounded-md text-center">
        <h3 className="text-lg text-gray-800">Log in</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5 mt-5 px-5"
        >
          <input
            ref={register({ required: "Email is required" })}
            name="email"
            type="email"
            required
            className="input mb-5"
            placeholder="email"
          />
          {errors.email?.message === "minLength" && (
            <FormError errorMessage={errors.email?.message} />
          )}
          <input
            ref={register({ required: "Password is required", minLength: 10 })}
            name="password"
            type="password"
            required
            className="input"
            placeholder="password"
          />
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 10 chars." />
          )}
          <button className="button mt-5">
            {loading ? "Loading..." : "Log in"}
          </button>
          {loginMutationResult?.login.error && (
            <FormError errorMessage={loginMutationResult.login.error} />
          )}
        </form>
      </div>
    </div>
  );
};
