import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryCodes from './countrycodes';

export default function Home() {
  const [selectedCountry, setselectedCountry] = useState('+91');
  const [mobileno, setmobileno] = useState('');
  var url = 'https://wa.me/';

  return (
    <div className={styles.container}>
      <Head>
        <title>WhatsAppDM</title>
        <meta name="title" content="WhatsAppDM" />
        <link rel="manifest" href="manifest.json"></link>
        <meta
          name="description"
          content="WhatsApp Direct Message is an app that can be used to text any number on WhatsApp without saving their number."
        />
        <meta name="keywords" content="WhatsApp, Direct, Message" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Shubham Mahesh Gaikwad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="PageWrapper container">
        <div className="contentWrapper">
          <p className="Heading display-2">
            WhatsApp
            <a
              href="https://wa.me/918655301910?text=Hey I checked your WhatsappDM Project"
              className="DMText"
            >
              DM
            </a>
          </p>
          <p className="lead">
            Direct Message on Whatsapp without saving Number
          </p>

          <div className="input-group input-group-lg mb-3">
            <select
              className="form-select countryCodes"
              data-live-search="true"
              aria-label="Default select example"
              onChange={(e) => {
                setselectedCountry(e.target.value);
              }}
              defaultValue={+91}
            >
              <CountryCodes />
            </select>
            <span className="input-group-text" id="basic-addon1">
              {selectedCountry}
            </span>
          </div>
          <div className="input-group input-group-lg">
            <input
              type="tel"
              aria-label="Mobile No"
              className="form-control form-control-lg mobNo text-center"
              placeholder="Mobile No"
              maxLength={10}
              value={mobileno}
              onChange={(e) => {
                setmobileno(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              console.log(url + selectedCountry + mobileno + '?text=Hi');
              window.location.href =
                url + selectedCountry + mobileno + '?text=Hi';
            }}
            className="button-30 mt-3 mb-5"
          >
            Say Hi
          </button>
        </div>
      </div>
      <div className="container InstructionsWrapper">
        <div className="Instructions">
          <h1 className="display-5 text-center">Instructions</h1>
          {/* <code> */}
          <ul>
            <li>Works best on mobile devices.</li>
            <li>
              Only the users already regsitered on whatsapp can be texted.
            </li>
            <li>
              Steps to add it as an App:
              <ul>
                <li>Click three dots on the top right of the screen.</li>
                <li>Click on Add to Home Screen.</li>
                <li>A popup will occur. Click Add.</li>
                <li>
                  Congratulations! You can now text anyone on WhatsApp without
                  saving their number.
                </li>
              </ul>
            </li>
            <li>This website does not use cookies.</li>
          </ul>
          {/* </code> */}
        </div>
      </div>
    </div>
  );
}
