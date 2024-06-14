
import React, { useEffect, useState } from "react";
import { UrlMenuTypes } from "../lib/definitions";
import { urlMenu } from "../lib/url-menu";
import './styles/DisplayUrl.css';

export default function DisplayUrl({familyChoice}: {familyChoice: string}) {

    const [searchUrl] = useState<UrlMenuTypes[]>(urlMenu);
    const [changeUrl, setChangeUrl] = useState<string | undefined>("");

    const [registerUrl, setRegisterUrl] = useState<string | undefined>("");

    const [, setTime] = useState(Date.now());

    useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const otherDate = new Date();
  
    const hours = otherDate.getHours();
    const minutes = otherDate.getMinutes();
    const seconds = otherDate.getSeconds();

    const handleChangeUrl = (url: string) => {
        const foundUrl = searchUrl.flatMap(sear => sear.url).find((urlDetails) => urlDetails === url);
        setChangeUrl(foundUrl);
    };

    const derivatedState: string | undefined = changeUrl;

    const handleSave = () => {
        setRegisterUrl(derivatedState);
        setChangeUrl("");
    };

    return (
        <React.Fragment>
            {searchUrl.map((search: UrlMenuTypes) => (
                search.description === familyChoice ? (
                    <div key={search.id}>

                        <div className="date-description">
                            <p>{new Date().toDateString()}</p>
                            <p>Time: {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                        </div>

                        {search.url.map((url, index) => (
                            <div key={index} className="li-link-btn">
                                <li>
                                    <a href={url} target="_blank" rel="noopener noreferrer">Url: {url}</a>
                                </li>
                                <button 
                                    type="button" 
                                    onClick={() => handleChangeUrl(url)}
                                >
                                    Change
                                </button>
                            </div>
                        ))}
                    </div>
                ) : null 
            ))}

            {registerUrl !== "" ? (
                <li className="litag">
                    <a href={registerUrl} target="_blank" rel="noopener noreferrer">{registerUrl}</a>
                </li>
            ) : null}

            <div className="inputbtn">
                <input type="text" value={changeUrl} onChange={(e) => setChangeUrl(e.target.value)} 
                    placeholder="Click Change !"    
                />
                <button type="button" onClick={handleSave} disabled={changeUrl === "" ? true : false}>Save</button>
            </div>
        </React.Fragment>
    )
}
