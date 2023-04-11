import React from "react";

export default function AdoptionForm() {

    return (

        <div className="formContainer">
            <span>Fields marked * are required</span>
            <form>
                {/* First Name */}
                <div className="firstName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">First Name *</span>
                    </label>
                    <input type="text" placeholder="First Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Last Name */}
                <div className="lastName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Last Name *</span>
                    </label>
                    <input type="text" placeholder="Last Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Address */}
                <div className="address form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address *</span>
                    </label>
                    <input type="text" placeholder="Address" maxLength={50} required className="input input-bordered w-full max-w-xs" />
                </div>
                {/* County */}
                <div className="county form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">County *</span>
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
                        <span className="label-text">Postcode *</span>
                    </label>
                    <input type="text" placeholder="Postcode" required maxLength={8} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Email */}
                <div className="email form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email *</span>
                    </label>
                    <input type="email" placeholder="Email" required maxLength={40} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Phone */}
                <div className="phone form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address *</span>
                    </label>
                    <input type="text" placeholder="Address" required maxLength={14} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Name of Dog */}
                <div className="dogName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name of Dog *</span>
                    </label>
                    <input type="text" placeholder="Name of Dog" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Reason for Re-homing */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Reason for re-homing *</span>
                    </label>
                    <textarea maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                {/* Sex */}
                <div className="sexRadio bg-white">
                    <span>Sex *</span>
                    <div className="male form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Male</span> 
                            <input type="radio" name="sex" value="male" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="female form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Female</span> 
                        <input type="radio" name="sex" value="female" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Age */}
                <div className="dogAge form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Age of Dog *</span>
                    </label>
                    <input type="number" placeholder="Age of Dog" required max={100} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Colour */}
                <div className="dogColour form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Colour*</span>
                    </label>
                    <input type="text" placeholder="Colour" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Registered Owner? */}
                <div className="regOwnerRadio bg-white">
                    <span>Are you the registered owner? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input required type="radio" name="registeredOwner" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">No</span> 
                        <input type="radio" name="registeredOwner" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>
                {/* If No - deatails */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">If you are not the registered owner, provide details</span>
                    </label>
                    <textarea maxLength={500} className="textarea textarea-bordered h-24" placeholder="500 characters maximum"></textarea>
                </div>
                {/* Neutered */}
                <div className="neutered bg-white">
                    <span>Neutered? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input required type="radio" name="neutered" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">No</span> 
                        <input type="radio" name="neutered" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Size */}  
                <div className="size bg-white">
                    <span>Size *</span>
                    <div className="miniature form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Miniature</span> 
                            <input required type="radio" name="size" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="standard form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Standard</span> 
                        <input type="radio" name="size" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Type */}
                <div className="type bg-white">
                    <span>Type *</span>
                    <div className="longHaired form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Long Haired</span> 
                            <input required type="radio" name="type" value="longHaired" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="smooth form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Smooth</span> 
                            <input type="radio" name="type" value="smooth" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                    </div>
                    <div className="wireHaired form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Wire Haired</span> 
                            <input type="radio" name="type" value="wireHaired" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                    </div>
                </div>

                {/* Microchip Number */}
                <div className="microchipNumber form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Microchip Number</span>
                    </label>
                    <input type="text" placeholder="Microchip Number"  maxLength={15} className="input input-bordered w-full max-w-xs" />
                </div>

                {/* KC Registered Name */}
                <div className="KCName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">KC Registered Name, if known</span>
                    </label>
                    <input type="text" placeholder="KC Name, if known"  maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* KC Number */}
                <div className="KCNumber form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">KC Registered Number, if known</span>
                    </label>
                    <input type="text" placeholder="KC Number, if known"  maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Breeder */}
                <div className="breeder form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Breeder name and address, if known</span>
                    </label>
                    <input type="text" placeholder="Breeder name and address, if known"  maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Breeder Contacted */}
                <div className="breederContacted bg-white">
                    <span>Breeder contacted? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input required type="radio" name="breederContacted" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">No</span> 
                        <input required type="radio" name="breederContacted" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>
                {/* Dog is Vaccinated */}
                <div className="vaccinated bg-white">
                    <span>Dog is vaccinated? *</span>
                    <div className="vaccinated form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input required type="radio" name="vaccinated" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">No</span> 
                        <input type="radio" name="vaccinated" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* PRA Status */}
                <div className="praStatus bg-white">
                    <span>PRA status, if known</span>
                    <div className="praStatus form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">N/A</span> 
                            <input  type="radio" name="praStatus" value="N/A" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="clear form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Clear</span> 
                        <input type="radio" name="praStatus" value="Clear" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="carrier form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Carrier</span> 
                        <input type="radio" name="praStatus" value="Carrier" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="atRisk form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">At Risk</span> 
                        <input type="radio" name="praStatus" value="At Risk" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Laforas Status */}
                <div className="laforasStatus bg-white">
                    <span>Laforas status, if known</span>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">N/A</span> 
                            <input  type="radio" name="laforaStatus" value="N/A" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="clear form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Clear</span> 
                        <input type="radio" name="laforaStatus" value="Clear" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="carrier form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Carrier</span> 
                        <input type="radio" name="laforaStatus" value="Carrier" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="atRisk form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">At Risk</span> 
                        <input type="radio" name="laforaStatus" value="At Risk" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Existing Health Conditions */}
                <div className="praStatus bg-white">
                    <span>Existing Health Conditions? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input  type="radio" name="existingHealthConditions" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">No</span> 
                        <input type="radio" name="existingHealthConditions" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Existing health conditions - details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">If yes, provide details</span>
                    </label>
                    <textarea maxLength={500} className="textarea textarea-bordered h-24" placeholder="500 characters maximum"></textarea>
                </div>

            </form>


        </div>
    )
}