import React from 'react';
import logo from './hicet-icons.jpeg';
import './App.css';
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiNginxproxymanager } from "react-icons/si";
import { PiSealPercentBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { LuFileBarChart2 } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { BiClinic } from "react-icons/bi";
function App() {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-light" style={{ width: "280px", height: "700px" }}>
        <a href="/" className="d-flex flex-column align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
          <span className="fs-4">
            <img src={logo} alt="logo" style={{ width: '130px',marginLeft:'50px', height: '120px', borderRadius: '8px' }} />
          </span>
        </a>
        <hr className="text-light" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#a" className="nav-link active text-light" aria-current="page">
              <IoPeopleCircleOutline className='icons' />
              Student Management
            </a>
          </li>
          <li>
            <a href="#b" className="nav-link text-light">
              <SiNginxproxymanager className='icons' />
              Financial Management
            </a>
          </li>
          <li>
            <a href="#c" className="nav-link text-light">
              <PiSealPercentBold className='icons' />
              Quality Control
            </a>
          </li>
          <li>
            <a href="#d" className="nav-link text-light">
              <TbReport className='icons' />
              Report Delivery
            </a>
          </li>
          <li>
            <a href="#e" className="nav-link text-light">
              <LuFileBarChart2 className='icons' />
              Attendance
            </a>
          </li>
        </ul>
        <hr className="text-light" />
        <div className='bottom-logo'>
          <FaRegQuestionCircle className='bLogo' />
          <IoMdSettings className='bLogo' />
          <IoIosLogOut className='bLogo' />
        </div>
      </div>
      <div className="flex-grow-1 p-3">
        <h1>Student Management</h1>
        <hr className="text-light" />
        <div className="row">
          <div className="cards col-md-4 mb-3">
            <div className="h-100 p-5 text-bg-danger rounded-3 d-flex align-items-center justify-content-between">
              <IoPersonSharp className="icon" />
              <div className="text-center flex-grow-1">
                <h2 className='student'>8</h2>
                <h5>Regular Students</h5>
              </div>
            </div>
          </div>
          <div className="cards col-md-4 mb-3">
            <div className="h-100 p-5 text-bg-primary rounded-3 d-flex align-items-center justify-content-between">
              <PiStudentBold className="icon" />
              <div className="text-center flex-grow-1">
                <h2>15</h2>
                <h5>New Enrollments</h5>
              </div>
            </div>
          </div>
          <div className="cards col-md-4 mb-3">
            <div className="h-100 p-5 text-bg-success rounded-3 d-flex align-items-center justify-content-between">
              <HiAcademicCap className="icon"/>
              <div className="text-center flex-grow-1">
                <h2>20</h2>
                <h5>Completed Courses</h5>
              </div>
              <span className="icon"></span>
            </div>
          </div>
        </div>
        <div className="menu-container mt-4">
          <h3>Menu</h3>
          <div className="table-section mt-4">
          <table className="table text-center">
            <tbody>
              <tr>
                <td><span className='icon1'><IoPersonSharp /></span><br></br>Regular Enrollment</td>
                <td><span className='icon1'><FaBookOpen /></span><br></br>Remedial Enrollment</td>
                <td><span className='icon1'><HiAcademicCap /></span><br></br>Club Management</td>
              </tr>
              <tr>
              <td><span className='icon1'><MdMarkEmailRead /></span><br></br>SMS/Email</td>
              <td><span className='icon1'><LuFileBarChart2 /></span><br></br>Attendance</td>
              <td><span className='icon1'><BiClinic /></span><br></br>Clinic</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
