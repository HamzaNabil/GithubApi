import React from "react";

export const proxy = "https://cors-anywhere.herokuapp.com/";

export const accessTokenUrl = "https://github.com/login/oauth/access_token";

export const userApi = "https://api.github.com/user";

export const repos = "https://api.github.com/users/HamzaNabil/repos";

export const singleRepo = "https://api.github.com/repos/HamzaNabil";

export const renderLoader = () => {
  return (
    <div className="loader">
      <svg width="64px" height="64px" viewBox="0 0 128 128">
        <g>
          <path
            fill="#000000"
            fillOpacity="1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(30 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(60 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(90 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(120 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(150 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(180 64 64)"
          />
          <path
            fill="#e5e5e5"
            fillOpacity="0.1"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(210 64 64)"
          />
          <path
            fill="#cccccc"
            fillOpacity="0.2"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(240 64 64)"
          />
          <path
            fill="#999999"
            fillOpacity="0.4"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(270 64 64)"
          />
          <path
            fill="#666666"
            fillOpacity="0.6"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(300 64 64)"
          />
          <path
            fill="#333333"
            fillOpacity="0.8"
            d="M70.48 35.8l-6.16-6.24-6.16 6.26L64.32.88z"
            transform="rotate(330 64 64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
            calcMode="discrete"
            dur="960ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
};
