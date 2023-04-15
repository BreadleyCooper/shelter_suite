import React from "react";
import styles from "../components/componentStyles/adoptionForm.module.css"

import { collection, addDoc } from "firebase/firestore";
import {doc , setDoc} from "firebase/firestore"
import { db } from "@/firebaseConfig";

const dbInstance = collection(db, "adoptionApplications")



export default function AdoptionForm() {

    async function saveTest (e){
        e.preventDefault()
        try{
            setDoc(doc(db, "adoptionApplications", "test"),{
                test:test
            })
        }catch (error) {
            console.log(error)
        }
    }
    
    async function saveApplication(e) {
        e.preventDefault()
        try{
        addDoc(dbInstance, {
            firstName: firstName,
            lastName : lastName,
            address: address,
            addressLine1: addressLine1,
            county: county,
            postCode: postCode,
            area : area,
            email:email,
            phone:phone,
            dogName:dogName,
            reasonForRehome : reasonForRehome,
            sex:sex,
            age:age,
            colour:colour,
            registeredOwner:registeredOwner,
            notRegisteredOwnerDetails:notRegisteredOwnerDetails,
            neutered:neutered,
            size:size,
            type:type,
            microChip:microChip,
            kcName:kcName,
            kcNumber: kcNumber,
            breeder : breeder,
            breederContacted:breederContacted,
            vaccinated:vaccinated,
            praStatus:praStatus,
            laforasStatus:laforasStatus,
            existingHealthConditions:existingHealthConditions,
            healthDetails:healthDetails,
            houseTrained:houseTrained,
            travelSick:travelSick,
            usedToCats:usedToCats,
            usedToGarden:usedToGarden,
            usedToChildren:usedToChildren,
            usedToOtherDogs:usedToOtherDogs,
            gaurdsFoodOrToys:gaurdsFoodOrToys,
            digsHoles:digsHoles,
            noisy:noisy,
            walksOnLead:walksOnLead,
            comesWhenCalled:comesWhenCalled,
            crateTrained: crateTrained,
            escapeArtist:escapeArtist,
            everBitten:everBitten,
            bittenDetails:bittenDetails,
            otherPets:otherPets,
            afraid:afraid,
            afraidDetails:afraidDetails,
            vetPermission:vetPermission,
            otherDetails:otherDetails

        })
        }catch(error) {
            console.log(error)
        }
    }


    const [test, setTest] = React.useState()

    const [firstName, setFirstName] = React.useState()
    const [lastName, setLastName] = React.useState()
    const [address, setAddress] = React.useState()
    const [addressLine1, setAddressLine2] = React.useState()
    const [county, setCounty] = React.useState()
    const [postCode, setPostCode] = React.useState()
    const [area, setArea] = React.useState()
    const [email, setEmail] = React.useState()
    const [phone, setPhone] = React.useState()
    const [dogName, setDogName] = React.useState()
    const [reasonForRehome, setReasonForRehome] = React.useState()
    const [sex, setSex] = React.useState()
    const [age, setAge] = React.useState()
    const [colour, setColour] = React.useState()
    const [registeredOwner, setRegisteredOwner] = React.useState()
    const [notRegisteredOwnerDetails, setNotRegisteredOwnerDetails] = React.useState()
    const [neutered, setNeutered] = React.useState()
    const [size, setSize] = React.useState()
    const [type, setType] = React.useState()
    const [microChip, setMicroChip] = React.useState()
    const [kcName, setKCName] = React.useState()
    const [kcNumber, setKCNumber] = React.useState()
    const [breeder, setBreeder] = React.useState()
    const [breederContacted, setBreederContacted] = React.useState()
    const [vaccinated, setVaccinated] = React.useState()
    const [praStatus, setPRAStatus] = React.useState()
    const [laforasStatus, setLaforasStatus] = React.useState()
    const [existingHealthConditions, setExistingHealthConditions] = React.useState()
    const [healthDetails, setHealthDetails] = React.useState()
    const [houseTrained, setHouseTrained] = React.useState()
    const [travelSick, setTravelSick] = React.useState()
    const [usedToCats, setUsedToCats] = React.useState()
    const [usedToGarden, setUsedToGarden] = React.useState()
    const [usedToChildren, setUsedToChildren] = React.useState()
    const [usedToOtherDogs, setUsedToOtherDogs] = React.useState()
    const [gaurdsFoodOrToys, setGuardsFoodOrToys] = React.useState()
    const [digsHoles, setDigsHoles] = React.useState()
    const [noisy, setNoisy] = React.useState()
    const [walksOnLead, setWalksOnLead] = React.useState()
    const [comesWhenCalled, setComesWhenCalled] = React.useState()
    const [crateTrained, setCrateTrained] = React.useState()
    const [escapeArtist, setEscapeArtist] = React.useState()
    const [everBitten, setEverBitten] = React.useState()
    const [bittenDetails, setBittenDetails] = React.useState()
    const [otherPets, setOtherPets] = React.useState()
    const [afraid, setAfraid] = React.useState()
    const [afraidDetails, setAfraidDetails] = React.useState()
    const [vetPermission, setVetPermission] = React.useState()
    const [otherDetails, setOtherDetails] = React.useState()

    

    return (
        
        <div className="formContainer mx-10 max-w-7xl grid">
            <h1 className="text-primary-content py-5 font-bold text-lg ">Dachshund Rescue - Re-Homing Request Form</h1>
            <div className="text-primary-content py-5">
            If you are considering rehoming a Dachshund, please complete the form below with as much detail as possible to help us to identify the perfect home for your dachshund. Once we receive this, your Dachshund Rescue Coordinator can begin to look for a suitable new home. We will be in touch shortly to guide you through the next steps.
            </div>
            <br></br>
            <br></br>
            <div className="text-primary-content font-bold">Fields marked * are required</div>
            <h1 className="text-primary-content py-10 font-bold text-lg ">Your Details</h1>

            <form>
            <div className="firstName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Test *</span>
                    </label>
                    <input onChange={e => setTest(e.target.value)} id="lastName" type="text" placeholder="First Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>

                <button onClick={saveTest} className="btn">TEST</button>

            </form>

            <form className="grid">

                {/* Person Details Section */}
                <div className={styles.personDetails}>
                {/* First Name */}
                <div className="firstName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">First Name *</span>
                    </label>
                    <input onChange={e => setFirstName(e.target.value)} id="lastName" type="text" placeholder="First Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Last Name */}
                <div className="lastName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Last Name *</span>
                    </label>
                    <input onChange={e => setLastName(e.target.value)} id="lastName" type="text" placeholder="Last Name" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Address */}
                <div className="address form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Address *</span>
                    </label>
                    <input onChange={e => setAddress(e.target.value)} id="address" type="text" placeholder="Address" maxLength={50} required className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Address Line 2*/}
                <div className="address form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Address Line 2</span>
                    </label>
                    <input onChange={e => setAddressLine2(e.target.value)} id="address" type="text" placeholder="Address" maxLength={50} className="input input-bordered w-full max-w-xs" />
                </div>
               
                {/* County */}
                <div className="county form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">County *</span>
                    </label>
                    <select onChange={e => setCounty(e.target.value)} defaultValue={"Select County"} name="county" id="county" required className="select select-bordered">
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
                        <span className="text-primary-content label-text">Postcode *</span>
                    </label>
                    <input onChange={e => setPostCode(e.target.value)} id="postcode" type="text" placeholder="Postcode" required maxLength={8} className="input input-bordered w-full max-w-xs" />
                </div>
                 {/* Area */}
                 <div className="county form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Area *</span>
                    </label>
                    <select onChange={e => setArea(e.target.value)} defaultValue={"Select Area"} id="area" name="area" required className="select select-bordered">
                        <option>London</option>
                        <option>South East</option>
                        <option>East of England</option>
                        <option>South West</option>
                        <option>Midlands</option>
                        <option>North West</option>
                        <option>North East</option>
                        <option>Scotland</option>
                        <option>Wales</option>

                    </select>
                </div>
                
                {/* Email */}
                <div className="email form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Email *</span>
                    </label>
                    <input onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="Email" required maxLength={40} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Phone */}
                <div className="phone form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Phone Number *</span>
                    </label>
                    <input onChange={e => setPhone(e.target.value)} id="phone" type="tel" placeholder="Phone Number" required maxLength={14} className="input input-bordered w-full max-w-xs" />
                </div>
    
                </div>

                {/* Dog Details Section - 1 */}
                <h1 className="text-primary-content pb-10 font-bold text-lg ">Dog Details</h1>
                <div className={styles.dogDetails1}>

                {/* Name of Dog */}
                <div className="dogName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Name of Dog *</span>
                    </label>
                    <input onChange={e => setDogName(e.target.value)} id="dogName" type="text" placeholder="Name of Dog" required maxLength={60} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Reason for Re-homing */}
                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">Reason for re-homing *</span>
                    </label>
                    <textarea onChange={e => setReasonForRehome(e.target.value)} id="reasonForRehome" maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                {/* Sex */}
                <div className="sexRadio">
                    <span className="text-primary-content ">Sex *</span>
                    <div className="male form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">Male</span> 
                            <input onChange={e => setSex(e.target.value)} type="radio" name="sex" value="male" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="female form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content  label-text mr-4">Female</span> 
                        <input onChange={e => setSex(e.target.value)} type="radio" name="sex" value="female" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Age */}
                <div className=" dogAge form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Age of Dog *</span>
                    </label>
                    <input onChange={e => setAge(e.target.value)} type="number" placeholder="Age of Dog" required max={100} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Colour */}
                <div className="dogColour form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Colour*</span>
                    </label>
                    <input onChange={e => setColour(e.target.value)} id="colour" type="text" placeholder="Colour" required maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Registered Owner? */}
                <div className="regOwnerRadio">
                    <span className="text-primary-content ">Are you the registered owner? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input required onChange={e => setRegisteredOwner(e.target.value)} type="radio" name="registeredOwner" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setRegisteredOwner(e.target.value)} type="radio" name="registeredOwner" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>
                {/* If No - deatails */}
                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">If you are not the registered owner, provide details</span>
                    </label>
                    <textarea onChange={e => setNotRegisteredOwnerDetails(e.target.value)} id="notRegisteredOwnerDetails" maxLength={500} className="textarea textarea-bordered h-24" placeholder="500 characters maximum"></textarea>
                </div>
                {/* Neutered */}
                <div className="neutered">
                    <span className="text-primary-content ">Neutered? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input onChange={e => setNeutered(e.target.value)} required type="radio" name="neutered" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setNeutered(e.target.value)} type="radio" name="neutered" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Size */}  
                <div className="size">
                    <span className="text-primary-content ">Size *</span>
                    <div className="miniature form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Miniature</span> 
                            <input onChange={e => setSize(e.target.value)} required type="radio" name="size" value="yes" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                        </div>
                    <div className="standard form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">Standard</span> 
                        <input onChange={e => setSize(e.target.value)} type="radio" name="size" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Type */}
                <div className="type">
                    <span className="text-primary-content ">Type *</span>
                    <div className="longHaired form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Long Haired</span> 
                            <input onChange={e => setType(e.target.value)} required type="radio" name="type" value="longHaired" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="smooth form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Smooth</span> 
                            <input onChange={e => setType(e.target.value)} type="radio" name="type" value="smooth" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                    </div>
                    <div className="wireHaired form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Wire Haired</span> 
                            <input type="radio" name="type" value="wireHaired" className="radio checked:bg-blue-500 radio-primary"  />
                        </label>
                    </div>
                </div>

                {/* Microchip Number */}
                <div className="microchipNumber form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Microchip Number</span>
                    </label>
                    <input onChange={e => setMicroChip(e.target.value)} id="microChip" type="text" placeholder="Microchip Number"  maxLength={15} className="input input-bordered w-full max-w-xs" />
                </div>

                {/* KC Registered Name */}
                <div className="KCName form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">KC Registered Name, if known</span>
                    </label>
                    <input onChange={e => setKCName(e.target.value)} id="kcName" type="text" placeholder="KC Name, if known"  maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                {/* KC Number */}
                <div className="KCNumber form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">KC Registered Number, if known</span>
                    </label>
                    <input onChange={e => setKCNumber(e.target.value)} id="kcNumber" type="text" placeholder="KC Number, if known"  maxLength={30} className="input input-bordered w-full max-w-xs" />
                </div>
                </div>

                {/* Dog Health Section*/}
                <h1 className="text-primary-content pb-10 font-bold text-lg ">Dog Health Details</h1>
                <div className={styles.dogHealth}>
                {/* Breeder */}
                <div className="breeder form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-primary-content label-text">Breeder name and address, if known</span>
                    </label>
                    <input onChange={e => setBreeder(e.target.value)} id="breeder" type="text" placeholder="Breeder name and address, if known"  maxLength={100} className="input input-bordered w-full max-w-xs" />
                </div>
                
                {/* Breeder Contacted */}
                <div className="breederContacted">
                    <span className="text-primary-content ">Breeder contacted? *</span>
                    <div className="yes form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input onChange={e => setBreederContacted(e.target.value)} required type="radio" name="breederContacted" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setBreederContacted(e.target.value)} required type="radio" name="breederContacted" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>
                {/* Dog is Vaccinated */}
                <div className="vaccinated">
                    <span className="text-primary-content ">Dog is vaccinated? *</span>
                    <div className="vaccinated form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">Yes</span> 
                            <input onChange={e => setVaccinated(e.target.value)} required type="radio" name="vaccinated" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="no form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setVaccinated(e.target.value)} type="radio" name="vaccinated" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* PRA Status */}
                <div className="praStatus">
                    <span className="text-primary-content ">PRA status, if known</span>
                    <div className="praStatus form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">N/A</span> 
                            <input onChange={e => setPRAStatus(e.target.value)} type="radio" name="praStatus" value="N/A" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="clear form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 mr-4">Clear</span> 
                        <input onChange={e => setPRAStatus(e.target.value)} type="radio" name="praStatus" value="Clear" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="carrier form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 mr-4">Carrier</span> 
                        <input onChange={e => setPRAStatus(e.target.value)} type="radio" name="praStatus" value="Carrier" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="atRisk form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 mr-4">At Risk</span> 
                        <input onChange={e => setPRAStatus(e.target.value)} type="radio" name="praStatus" value="At Risk" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Laforas Status */}
                <div className="laforasStatus">
                    <span className="text-primary-content">Laforas status, if known</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-tex text-primary-content mr-4 ">N/A</span> 
                            <input onChange={e => setLaforasStatus(e.target.value)} type="radio" name="laforaStatus" value="N/A" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="clear form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">Clear</span> 
                        <input onChange={e => setLaforasStatus(e.target.value)} type="radio" name="laforaStatus" value="Clear" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="carrier form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">Carrier</span> 
                        <input onChange={e => setLaforasStatus(e.target.value)} type="radio" name="laforaStatus" value="Carrier" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                    <div className="atRisk form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">At Risk</span> 
                        <input onChange={e => setLaforasStatus(e.target.value)} type="radio" name="laforaStatus" value="At Risk" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Existing Health Conditions */}
                <div className="praStatus">
                    <span className="text-primary-content ">Existing Health Conditions? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input onChange={e => setExistingHealthConditions(e.target.value)} type="radio" name="existingHealthConditions" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setExistingHealthConditions(e.target.value)} type="radio" name="existingHealthConditions" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Existing health conditions - details */}
                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">If there are any existing health conditions, provide details</span>
                    </label>
                    <textarea onChange={e => setHealthDetails(e.target.value)} id="healthDetails" maxLength={500} className="textarea textarea-bordered h-24" placeholder="500 characters maximum"></textarea>
                </div>
                </div>

                {/* More Details Section */}
                <h1 className="text-primary-content pb-10 font-bold text-lg ">More Details</h1>
                <div className={styles.moreDetails}>
                {/* House Trained */}
                <div className="">
                    <span className="text-primary-content ">House Trained? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">Yes</span> 
                            <input onChange={e => setHouseTrained(e.target.value)} type="radio" name="houseTrained" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal justify-normal">
                        <span className="label-text text-primary-content mr-4 mr-4">No</span> 
                        <input onChange={e => setHouseTrained(e.target.value)} required type="radio" name="houseTrained" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Travel Sick */}

                <div className="">
                    <span className="text-primary-content ">Gets Travel Sick? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input onChange={e => setTravelSick(e.target.value)} type="radio" name="travelSick" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setTravelSick(e.target.value)} required type="radio" name="travelSick" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Used to Cats */}

                <div className="">
                    <span className="text-primary-content ">Used to Cats? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes</span> 
                            <input onChange={e => setUsedToCats(e.target.value)} type="radio" name="usedToCats" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 ">No</span> 
                        <input onChange={e => setUsedToCats(e.target.value)} required type="radio" name="usedToCats" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Used to a garden*/}

                <div className="">
                    <span className="text-primary-content ">Used to a Garden? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">Yes</span> 
                            <input onChange={e => setUsedToGarden(e.target.value)} required type="radio" name="usedToGarden" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4 mr-4">No</span> 
                        <input onChange={e => setUsedToGarden(e.target.value)} type="radio" name="usedToGarden" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Used to Children */}

                <div className="">
                    <span className="text-primary-content ">Used to Children? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 mr-4">Yes</span> 
                            <input onChange={e => setUsedToChildren(e.target.value)} required type="radio" name="usedToChildren" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4">No</span> 
                        <input onChange={e => setUsedToChildren(e.target.value)} type="radio" name="usedToChildren" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Used to Other Dogs  */}

                <div className="">
                    <span className="text-primary-content ">Used to other dogs? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4">Yes</span> 
                            <input onChange={e => setUsedToOtherDogs(e.target.value)} required type="radio" name="usedToOtherDogs" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="label-text text-primary-content mr-4">No</span> 
                        <input onChange={e => setUsedToOtherDogs(e.target.value)} type="radio" name="usedToOtherDogs" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Gaurds Food/Toys */}

                <div className="">
                    <span className="text-primary-content ">Guards Food/Toys? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4">Yes</span> 
                            <input onChange={e => setGuardsFoodOrToys(e.target.value)} required type="radio" name="gaurdsFoodOrToys" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setGuardsFoodOrToys(e.target.value)} type="radio" name="gaurdsFoodOrToys" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Digs Holes */}

                <div className="">
                    <span className="text-primary-content ">Digs Holes? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setDigsHoles(e.target.value)} required type="radio" name="digsHoles" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setDigsHoles(e.target.value)} type="radio" name="digsHoles" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Is Noisy */}

                <div className="">
                    <span className="text-primary-content ">Is Noisy? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setNoisy(e.target.value)} required type="radio" name="noisy" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setNoisy(e.target.value)} type="radio" name="noisy" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Walks on Lead */}

                <div className="">
                    <span className="text-primary-content ">Walks on Lead? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setWalksOnLead(e.target.value)} required type="radio" name="walksOnLead" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setWalksOnLead(e.target.value)} type="radio" name="walksOnLead" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Comes When Called */}

                <div className="">
                    <span className="text-primary-content ">Comes When Called? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4">Yes</span> 
                            <input onChange={e => setComesWhenCalled(e.target.value)} required type="radio" name="comesWhenCalled" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setComesWhenCalled(e.target.value)} type="radio" name="comesWhenCalled" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Crate Trained */}

                <div className="">
                    <span className="text-primary-content ">Crate Trained? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setCrateTrained(e.target.value)} required type="radio" name="crateTrained" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setCrateTrained(e.target.value)} type="radio" name="crateTrained" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Escape Artist */}

                <div className="">
                    <span className="text-primary-content ">Is an escape artist? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setEscapeArtist(e.target.value)} required type="radio" name="escapeArtist" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setEscapeArtist(e.target.value)} type="radio" name="escapeArtist" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Ever Bitten Anyone */}

                <div className="">
                    <span className="text-primary-content ">Ever bitten anyone? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setEverBitten(e.target.value)} required type="radio" name="everBitten" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setEverBitten(e.target.value)} type="radio" name="everBitten" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Bitten - details */}
                
                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">If they have ever bitten anyone, give details *</span>
                    </label>
                    <textarea onChange={e => setBittenDetails(e.target.value)} id="bittenDetails" maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                {/* Used to other pets */}

                
                <div className="">
                    <span className="text-primary-content ">Used to other pets? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setOtherPets(e.target.value)} required type="radio" name="otherPets" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setOtherPets(e.target.value)} type="radio" name="otherPets" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Afraid of anything */}

                
                <div className="">
                    <span className="text-primary-content ">Is afraid of anything? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setAfraid(e.target.value)} required type="radio" name="afraid" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setAfraid(e.target.value)} type="radio" name="afraid" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* Afraid - details */}
                
                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">If afraid of anything, give details *</span>
                    </label>
                    <textarea onChange={e => setAfraidDetails(e.target.value)} id="afraidDetails" maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                {/* Permission to contact vet */}

                <div className="">
                    <span className="text-primary-content ">Permission to contact vet? *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="text-primary-content label-text mr-4">Yes</span> 
                            <input onChange={e => setVetPermission(e.target.value)} required type="radio" name="vetPermission" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                        </label>
                        </div>
                    <div className="form-control">
                    <label className="label cursor-pointer justify-normal">
                        <span className="text-primary-content label-text mr-4">No</span> 
                        <input onChange={e => setVetPermission(e.target.value)} type="radio" name="vetPermission" value="no" className="radio checked:bg-blue-500 radio-primary"  />
                    </label>
                    </div>
                </div>

                {/* other information */}

                <div className="form-control">
                    <label className="label">
                        <span className="text-primary-content label-text">If there is any other relevent information, give details *</span>
                    </label>
                    <textarea onChange={e => setOtherDetails(e.target.value)} id="otherDetails" maxLength={1000} className="textarea textarea-bordered h-24" placeholder="1000 characters maximum"></textarea>
                </div>

                </div>

                {/* confirm */}

                <div className="text-primary-content pb-10">
                    <span>I hereby confirm that all of the information I have supplied here is accurate & complete and that I have disclosed all relevant information *</span>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                            <span className="label-text text-primary-content mr-4 ">Yes, I confirm *</span> 
                            <input required type="radio" name="confirm" value="yes" className="radio checked:bg-blue-500 radio-primary" />
                    </label>
                    </div>
                </div>

                <button onClick={saveApplication} className="btn btn-primary mb-20 max-w-xs min-w-[50%] justify-self-end">Submit</button>

            </form>


        </div>



    )
}