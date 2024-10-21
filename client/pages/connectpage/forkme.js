import React from "react";
import "./forkme.scss";
import { t } from "../../locales/";

export const ForkMe = ({ repo = "https://www.google.com.eg/" }) => {
    return (
        <div className="component_forkme">
            <a href={repo} className="google-corner" aria-label="Visit Google" rel="nofollow" target="_blank">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google Logo"
                    width="80"
                    height="80"
                    style={{ borderRadius: "50%" }}
                />
            </a>
        </div>
    );
};

export const PoweredByFilestash = () => {
    return (
        <div className="component_poweredbyfilestash">
            { t("Powered by") } <strong><a href="https://www.filestash.app">Filestash</a></strong>
        </div>
    );
};
