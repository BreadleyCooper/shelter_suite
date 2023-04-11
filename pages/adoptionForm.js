import React from "react";

export default function AdoptionForm() {

    return (

        <div className="formContainer">

            <form>
                {/* First Name */}
                <div className="firstName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="First Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Last Name */}
                <div className="lastName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Last Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Address */}
                <div className="address form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Address" maxLength={50} required className="input input-bordered w-full max-w-xs" />
                </div>
                {/* County */}
                <div className="county form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">County</span>
                    </label>
                    <select required className="select select-bordered">
                        <option disabled selected>Select County</option>
                        <option></option>
                        <option>Aberdeenshire</option>
                        <option>Anglesey</option>
                        <option>Angus</option>
                        <option>Argyll</option>
                        <option>Ayrshire</option>
                        <option>Banffshire</option>
                        <option>Bedfordshire</option>
                        <option>Berkshire</option>
                        <option>Berwickshire</option>
                        <option>Bridgend County</option>
                        <option>Buckinghamshire</option>
                        <option>Buteshire</option>
                        <option>Caerphilly</option>
                        <option>Caithness</option>
                        <option>Cambridgeshire</option>
                        <option>Carmarthenshire</option>
                        <option>Cardiff</option>
                        <option>Cardigan / Ceredigion</option>
                        <option>Cheshire</option>
                        <option>Clackmannanshire</option>
                        <option>Conwy</option>
                        <option>Cornwall</option>
                        <option>County Durham</option>
                        <option>Cumbria</option>
                        <option>Denbigshire</option>
                        <option>Derbyshire</option>
                        <option>Devon</option>
                        <option>Dorset</option>
                        <option>Dumbartonshire</option>
                        <option>Dumfriesshire</option>
                        <option>East Lothian</option>
                        <option>East Sussex</option>
                        <option>East Yorkshire</option>
                        <option>Essex North</option>
                        <option>Essex South</option>
                        <option>Fife</option>
                        <option>Flintshire</option>
                        <option>Gloucestershire</option>
                        <option>Greater London</option>
                        <option>Greater Manchester</option>
                        <option>Blanau Gwent</option>
                        <option>Gwynedd</option>
                        <option>Hampshire</option>
                        <option>Herefordshire</option>
                        <option>Hertfordshire</option>
                        <option>Humberside</option>
                        <option>Inverness-shire</option>
                        <option>Isle of Man</option>
                        <option>Isle of White</option>
                        <option>Isles of Scilly</option>
                        <option>Kent</option>
                        <option>Kincardineshire</option>
                        <option>Kinross-shire</option>
                        <option>Kirkcudbrightshire</option>
                        <option>Lanarkshire</option>
                        <option>Lancashire</option>
                        <option>Leicestershire</option>
                        <option>Lincolnshire</option>
                        <option>Merseyside</option>
                        <option>Merthyr Tydfil</option>
                        <option>Midlotian</option>
                        <option>Monmouthshire</option>
                        <option>Moray</option>
                        <option>Nairnshire</option>
                        <option>Neath & Port Talbot</option>
                        <option>Newport City</option>
                        <option>Norfolk</option>
                        <option>North Yorkshire</option>
                        <option>Northamptonshire</option>
                        <option>Orkney</option>
                        <option>Oxfordshire</option>
                        <option>Peebleshire</option>
                        <option>Pembrokeshire</option>
                        <option>Perthshire</option>
                        <option>Powys</option>
                        <option>Renfrewshire</option>
                        <option>Rhondda Cynon Taff</option>
                        <option>Ross and Cromarty</option>
                        <option>Roxburghshire</option>
                        <option>Rutland</option>
                        <option>Selkirkshire</option>
                        <option>Shetland</option>
                        <option>Shropshire</option>
                        <option>Somerset</option>
                        <option>South Yorkshire</option>
                        <option>Staffordshire</option>
                        <option>Stirlingshire</option>
                        <option>Suffolk</option>
                        <option>Surrey</option>
                        <option>Sutherland</option>
                        <option>Swansea</option>
                        <option>Teeside</option>
                        <option>Torfaen</option>
                        <option>Tyne & Wear</option>
                        <option>Vale of Glamorgan</option>
                        <option>Warwickshire</option>
                        <option>West Lothian</option>
                        <option>West Midlands</option>
                        <option>West Sussex</option>
                        <option>West Yorkshire</option>
                        <option>Wigtownshire</option>
                        <option>Wiltshire</option>
                        <option>Worcestershire</option>
                        <option>Wrexham</option>
                    </select>
                </div>
                {/*Post Code*/}
                <div className="postcode form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Postcode</span>
                    </label>
                    <input type="text" placeholder="Postcode" required maxLength={8} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Email */}
                <div className="email form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" required maxLength={40} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Phone */}
                <div className="phone form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Address" required maxLength={14} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Name of Dog */}
                <div className="dogName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name of Dog</span>
                    </label>
                    <input type="text" placeholder="Name of Dog" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Reason for Re-homing */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Reason for re-homing</span>
                    </label>
                    <textarea maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                <button>Submit</button>
            </form>

        </div>
    )
}