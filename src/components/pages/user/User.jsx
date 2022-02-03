import React from 'react'
import './user.css';
import girlImg from'../../images/girl.jpg'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline ,Publish,  LocationSearching} from '@material-ui/icons';
import { Link } from 'react-router-dom';



export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to='/newUser'>
          <button className="userAddButton">Create User</button>
          </Link>
      </div>
      <div className='userContainer'>
          <div className="userShow">
              <div className="userShopTop">
                  <img src={girlImg} alt="" className="userShowImg" />
              
              <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Housteon</span>
                  <span className="userShowJobTitle">Software Engineer</span>
              </div>
              </div>
              <div className="userShowButtom">
                  <span className="usersShowBottomTitle">Account Details</span>
                  <div className="userShowInfo">
                  <PermIdentity className='usersShowIcon'/>
                  <span className="userShowInfoTitle">NanaYaw99</span>
                  </div>

                  <div className="userShowInfo">
                  <CalendarToday className='usersShowIcon'/>
                  <span className="userShowInfoTitle">10/12/1990</span>
                  </div>

                  <span className="usersShowBottomTitle">Contact Details</span>
                  <div className="userShowInfo">
                  <PhoneAndroid className='usersShowIcon'/>
                  <span className="userShowInfoTitle">+1 345 4323 34</span>
                  </div>

                  <div className="userShowInfo">
                  <MailOutline className='usersShowIcon'/>
                  <span className="userShowInfoTitle">nanayaw99@gmail.com</span>
                  </div>

                  <div className="userShowInfo">
                  <LocationSearching className='usersShowIcon'/>
                  <span className="userShowInfoTitle">Michigan | USA</span>
                  </div>

              </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form action="" className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label htmlFor="">Username</label>
                          <input type="text" placeholder='NanaYaw99'
                           className='userUpdateInput'/>
                      </div>
                      <div className="userUpdateItem">
                          <label htmlFor="">Full Name</label>
                          <input type="text" placeholder='Anna Housteon'
                           className='userUpdateInput'/>
                      </div>
                      <div className="userUpdateItem">
                          <label htmlFor="">Email</label>
                          <input type="text" placeholder='nanayaw99@gmail.com'
                           className='userUpdateInput'/>
                      </div>
                      <div className="userUpdateItem">
                          <label htmlFor="">Phone</label>
                          <input type="text" placeholder='+1 345 4323 34'
                           className='userUpdateInput'/>
                      </div>
                      <div className="userUpdateItem">
                          <label htmlFor="">Address</label>
                          <input type="text" placeholder='Michigan | USA'
                           className='userUpdateInput'/>
                      </div>
                  </div>
                  <div className="userUpdateRight">
                      <div className="userUpdateUpload">
                          <img src={girlImg} alt="" className="userUpdateImg" />
                          <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                          <input type="file" id='file' style={{display: 'none'}}/>
                          
                      </div>
                      <button className="userUpdateButton">Update</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}
