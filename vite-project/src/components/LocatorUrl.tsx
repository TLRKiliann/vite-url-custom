import { useState } from "react";
import DisplayUrl from "./DisplayUrl";
import './styles/LocatorUrl.css';

export default function LocatorUrl() {

    const [familyChoice, setFamilyChoice] = useState<string>("library");

    return (
        <div className="container-url">
            <div className="lbl-select">
                <label htmlFor="selectFamily">Choose among proposals: </label>
                <select name="selectFamily"
                    value={familyChoice} onChange={(e) => setFamilyChoice(e.target.value)}>
                    <option value="library">library</option>
                    <option value="ui">UI</option>
                    <option value="frameworks">frameworks</option>
                </select>
            </div>
            <DisplayUrl familyChoice={familyChoice} />
        </div>
    )
}