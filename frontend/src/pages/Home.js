import React, { useState } from "react";
import logo from "../assets/images/logo-white.svg";
import menu from '../assets/images/menuLogo.png';
import dummyChat from "../assets/images/web-chat-demo.png";
import smile from "../assets/images/smile.png"
import profile from "../assets/images/bg-bg.jpg"
import people from "../assets/images/people.png"
import star from "../assets/images/star.png"
import chatImage from "../assets/images/chatImage.png"
// import vecOne from "../assets/images/vecOne.png"
import { NavLink } from "react-router-dom";
import { useRef } from "react";
// import { isCompositeComponent } from "react-dom/test-utils";


const Home = () => {
  // const [option, setOption] = useState(' ')
  // const items = ['Home', 'Features', 'Get Started', 'About Us',]
  const [isOpen, setIsOpen] = useState(false);
  const toggleOptions = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const ref = useRef(null);
  const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <div className="min-h-full min-w-full bg-[#F1F4Fd]  flex flex-col justify-center items-center text-[#000F21]">
        <div className="home-main flex flex-col items-center justify-start ">
          <nav className="bg-white navbar items-center rounded-xl grid grid-cols-3 flex-row">
            <div className="flex items-start pl-5 font-bold text-2xl">BlinkChat</div>
            <div className="flex flex-rows justify-between font-semibold">
              <p className="cursor-pointer">home</p>
              <p >Feature</p>
              <p>About Us</p>
            </div>
            <div className="flex justify-end pr-5 text-white">
              <button className="bg-[#1A398B] font-semibold px-5 py-2 rounded-lg">Login</button>
            </div>
          </nav>
          <div className="h-[427px] w-[1189px] flex flex-col mt-[140px]  items-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-[30px] h-[30px]" src={smile} alt="smile" />
              <p className="text-[24px] font-semibold">with <span className="text-[#1A398B]">BlinkChat</span> </p></div>
            <div className="flex flex-row items-center justify-center mt-2">
              <p className="text-[64px] font-semibold">Unlock the Ultimate</p>
              <img src={people} alt="people" />
              <p className="text-[64px] font-semibold">Messaging</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p className="text-[64px] font-semibold"><span className="text-[#1A398B]">Experience {" "}</span>
                with Every Chat!</p>
              <img className="h-[86px] w-[77px]" src={star} alt="star" />
            </div>
            <div className="text-[#1A398B] mt-4">Connect instantly, share effortlessly, and enjoy a seamless chat experience like never before.</div>
            <div className="mt-16 flex flex-row justify-center items-center gap-5">
              <button className="bg-[#1A398B] text-white text-[20px]  px-5 h-[60px] rounded-xl ">Start Chatting Now</button>
              <button className="border border-[#1A398B] text-[20px]  px-5 h-[60px] rounded-xl ">get the app</button>
            </div>
          </div>
          <div className="w-full imageCan flex justify-center items-end">
            <img className="rounded-t-xl" src={chatImage} alt="" />
          </div>
        </div>
        <div className="min-h-svh flex justify-center items-center">
          <div className="w-[1440px] h-[740px]  p-[48px]">
            <div className="h-[547px] w-[1344px] flex gap-16 flex-col p-1 ">
              <div className="font-semibold text-[24px]">
                <span className="border-b-2 border-[#000F21] pb-px">Features</span>
              </div>
              <div className=" flex flex-col gap-3">
                <p className="font-semibold text-[32px]">Why you Choose BlinkChat</p>
                <p>Explore features designed to make your chats more meaningful and fun.</p>
              </div>
              <div className="grid grid-cols-3 items-stretch justify-center pt-5">
                <div className="flex justify-center items-center">
                  <div className="h-[237px] w-[420px] bg-[#1A398B] flex flex-col  rounded-2xl cardImageOne">
                    <div className="w-full flex justify-start items-center pt-7 pl-9">
                      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.342375 6.34359C6.31359 6.26884 12.0549 4.01476 16.5 0C20.9448 4.01551 26.6861 6.27035 32.6576 6.34567C32.8845 7.69537 33 9.0866 33 10.5007C33 21.3502 26.1112 30.5801 16.5 34C6.88875 30.578 0 21.3481 0 10.4986C0 9.08245 0.117562 7.69537 0.342375 6.34359ZM24.1457 14.0431C24.5214 13.6515 24.7293 13.127 24.7246 12.5825C24.7199 12.0381 24.503 11.5173 24.1206 11.1323C23.7382 10.7473 23.2209 10.5289 22.6801 10.5242C22.1393 10.5195 21.6183 10.7288 21.2293 11.107L14.4375 17.9448L11.7707 15.2599C11.3817 14.8817 10.8607 14.6724 10.3199 14.6771C9.77914 14.6818 9.26184 14.9002 8.87944 15.2852C8.49703 15.6702 8.28012 16.191 8.27542 16.7355C8.27072 17.2799 8.47861 17.8044 8.85431 18.196L12.9793 22.349C13.3661 22.7382 13.8906 22.9569 14.4375 22.9569C14.9844 22.9569 15.5089 22.7382 15.8957 22.349L24.1457 14.0431Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center pt-6 pl-9 gap-3">
                      <p className="text-[18px] text-white font-semibold">Private Conversations</p>
                      <p className="text-[14px] text-left text-white">Enjoy secure and personal chats with encryption</p>
                      <p className="text-white text-[12px]">more...</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-[237px] w-[420px] bg-[#1A398B] flex flex-col  rounded-2xl cardImageOne">
                    <div className="w-full flex justify-start items-center pt-7 pl-9">
                      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6667 6C22.6667 7.5913 22.0696 9.11742 21.0069 10.2426C19.9442 11.3679 18.5029 12 17 12C15.4971 12 14.0558 11.3679 12.9931 10.2426C11.9304 9.11742 11.3333 7.5913 11.3333 6C11.3333 4.4087 11.9304 2.88258 12.9931 1.75736C14.0558 0.632141 15.4971 0 17 0C18.5029 0 19.9442 0.632141 21.0069 1.75736C22.0696 2.88258 22.6667 4.4087 22.6667 6ZM32.1111 10C32.1111 11.0609 31.7131 12.0783 31.0046 12.8284C30.2962 13.5786 29.3353 14 28.3333 14C27.3314 14 26.3705 13.5786 25.662 12.8284C24.9536 12.0783 24.5556 11.0609 24.5556 10C24.5556 8.93913 24.9536 7.92172 25.662 7.17157C26.3705 6.42143 27.3314 6 28.3333 6C29.3353 6 30.2962 6.42143 31.0046 7.17157C31.7131 7.92172 32.1111 8.93913 32.1111 10ZM24.5556 24C24.5556 21.8783 23.7595 19.8434 22.3426 18.3431C20.9256 16.8429 19.0039 16 17 16C14.9961 16 13.0744 16.8429 11.6574 18.3431C10.2405 19.8434 9.44444 21.8783 9.44444 24V30H24.5556V24ZM9.44444 10C9.44444 11.0609 9.04643 12.0783 8.33796 12.8284C7.62949 13.5786 6.6686 14 5.66667 14C4.66474 14 3.70385 13.5786 2.99537 12.8284C2.2869 12.0783 1.88889 11.0609 1.88889 10C1.88889 8.93913 2.2869 7.92172 2.99537 7.17157C3.70385 6.42143 4.66474 6 5.66667 6C6.6686 6 7.62949 6.42143 8.33796 7.17157C9.04643 7.92172 9.44444 8.93913 9.44444 10ZM28.3333 30V24C28.3361 21.9666 27.8484 19.9661 26.9167 18.188C27.7541 17.9611 28.6294 17.9397 29.4758 18.1254C30.3223 18.3112 31.1175 18.6992 31.8007 19.2598C32.484 19.8205 33.0373 20.5389 33.4185 21.3604C33.7996 22.1819 33.9985 23.0847 34 24V30H28.3333ZM7.08333 18.188C6.15163 19.9661 5.66402 21.9666 5.66667 24V30H5.01916e-07V24C-0.000363551 23.0841 0.19732 22.1802 0.5779 21.3577C0.95848 20.5352 1.51186 19.8159 2.19561 19.2548C2.87937 18.6938 3.67536 18.306 4.52259 18.121C5.36981 17.9361 6.24577 17.959 7.08333 18.188Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center pt-6 pl-9 gap-3">
                      <p className="text-[18px] text-white font-semibold">Seamless Group Chats</p>
                      <p className="text-[14px] text-left text-white">Bring your squad together with group chats designed for effortless collaboration and fun.</p>
                      <p className="text-white text-[12px]">more...</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-[237px] w-[420px] bg-[#1A398B] flex flex-col  rounded-2xl cardImageOne">
                    <div className="w-full flex justify-start items-center pt-7 pl-9">
                      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.93875 8.81192C1.34547 9.2027 0.856251 9.74609 0.517096 10.391C0.177942 11.0359 -1.65005e-06 11.7611 0 12.4984V29.6527C0 30.8057 0.434597 31.9114 1.20818 32.7267C1.98177 33.542 3.03098 34 4.125 34H28.875C29.969 34 31.0182 33.542 31.7918 32.7267C32.5654 31.9114 33 30.8057 33 29.6527V12.4984C33 11.7611 32.8221 11.0359 32.4829 10.391C32.1437 9.74609 31.6545 9.2027 31.0612 8.81192L18.6863 0.660795C18.0307 0.228969 17.2731 0 16.5 0C15.7269 0 14.9693 0.228969 14.3137 0.660795L1.93875 8.81192ZM7.33219 14.0786C7.10684 13.9202 6.85409 13.8101 6.58837 13.7546C6.32265 13.6992 6.04916 13.6994 5.78352 13.7553C5.51788 13.8112 5.26529 13.9217 5.04018 14.0805C4.81506 14.2393 4.62182 14.4432 4.4715 14.6807C4.32118 14.9182 4.21671 15.1846 4.16407 15.4646C4.11143 15.7447 4.11164 16.0329 4.16469 16.3128C4.27183 16.8782 4.5877 17.3756 5.04281 17.6956L15.3553 24.9403C15.6942 25.1786 16.0926 25.3058 16.5 25.3058C16.9074 25.3058 17.3058 25.1786 17.6447 24.9403L27.9572 17.6956C28.4123 17.3756 28.7282 16.8782 28.8353 16.3128C28.9425 15.7475 28.8321 15.1604 28.5285 14.6807C28.2249 14.2011 27.753 13.8682 27.2165 13.7553C26.68 13.6424 26.1229 13.7587 25.6678 14.0786L16.5 20.5191L7.33219 14.0786Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center pt-6 pl-9 gap-3">
                      <p className="text-[18px] text-white font-semibold">Rich Media Sharing</p>
                      <p className="text-[14px] text-left text-white">Share files, photos, and videos without limits.</p>
                      <p className="text-white text-[12px]">more...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 items-center justify-center ">
                <div >{" "}</div>
                <div className=" h-1/4 gap-2 flex justify-center items-center ">
                  <div className="bg-[#6597FA] h-2 px-1 rounded-xl"></div>
                  <div className="bg-[#1A398B] h-2 px-3 rounded-xl"></div>
                  <div className="bg-[#6597FA] h-2 px-1 rounded-xl"></div>
                </div>
                <div >{" "}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="w-[1404px] h-[592px] p-[30px] pt-[48px] flex flex-col justify-center items-center gap-16 rounded-xl bg-[#C9E5FD]">
            <div className="font-semibold text-[24px]">
              <span className="border-b-2 border-[#000F21] pb-px">FAQs</span>
            </div>
            <div className=" flex flex-col gap-3">
              <p className="font-semibold text-[32px]">Got Questions? We’ve Got Answers!</p>
              <p>Everything you need to know about using our platform.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 w-[1342px] h-[212]">
              <div className="grid grid-rows-1 justify-center gap-5 items-center">
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">What is BlinkChat, and how does it work?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">What personal information do I need to share?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">Does BlinkChat support group chats?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-1 justify-center gap-5 items-center">
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">Is BlinkChat free to use?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">Are my chats private and secure?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
                <div className="bg-[#1A398B] h-[58px] w-[660px] rounded-xl flex flex-row justify-start items-center pl-5">
                  <p className="text-left text-[20px] font-medium w-11/12 text-white">Can I customize my profile?</p>
                  <div className="flex justify-center items-center">
                    <button className="font-semibold text-[25px] text-white">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardBg ">
            <div className="w-full h-[740px] flex items-center justify-center  p-[48px] pt-72">
              <div className="h-[547px] w-[1344px]  flex gap-16  flex-col p-1 ">
                <div className="font-semibold text-[24px]">
                  <span className="border-b-2 border-[#000F21] pb-px">Testimonial</span>
                </div>
                <div className=" flex flex-col gap-3">
                  <p className="font-semibold text-[32px]">What Our Users Say</p>
                  <p>Real stories from people who’ve experienced the magic of our platform.</p>
                </div>
                <div className="grid grid-cols-3 text-white  h-[251px] w-[1344px] items-stretch justify-center ">
                  <div className="w-[423px] h-[251px]  relative flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#1A398B]  absolute  top-0 left-0 rounded-full">
                      <img className="rounded-full h-14 w-14" src={profile} alt="" />
                    </div>
                    <div className=" h-[240px] bg-[#1A398B] rounded-3xl  w-[410px] flex flex-col">
                      <div className="h-1/3 w-full pt-5 items-center justify-center flex flex-row">
                        <div className=" w-1/2 flex ml-20 flex-col">
                          <p className="text-left font-semibold text-[20px]">Raj Patidar</p>
                          <p className="text-left text-[12px]">Mumbai, India</p>
                        </div>
                        <div className="flex items-center h-full w-1/3  justify-end pr-8">
                          <p className=" text-right text-[25px]">*****</p>
                        </div>
                      </div>
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="w-9/12 h-full flex items-center justify-center ">
                          <p className="text-left text-pretty">This platform has transformed the way I stay connected with my loved ones. It’s fast, secure, and so much fun to use!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[423px] h-[251px]  relative flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#1A398B]  absolute  top-0 left-0 rounded-full">
                      <img className="rounded-full h-14 w-14" src={profile} alt="" />
                    </div>
                    <div className=" h-[240px] bg-[#1A398B] rounded-3xl  w-[410px] flex flex-col">
                      <div className="h-1/3 w-full pt-5 items-center justify-center flex flex-row">
                        <div className=" w-1/2 flex ml-20 flex-col">
                          <p className="text-left font-semibold text-[20px]">Raj Patidar</p>
                          <p className="text-left text-[12px]">Mumbai, India</p>
                        </div>
                        <div className="flex items-center h-full w-1/3  justify-end pr-8">
                          <p className=" text-right text-[25px]">***</p>
                        </div>
                      </div>
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="w-9/12 h-full flex items-center justify-center ">
                          <p className="text-left text-pretty">This platform has transformed the way I stay connected with my loved ones. It’s fast, secure, and so much fun to use!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[423px] h-[251px]  relative flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#1A398B]  absolute  top-0 left-0 rounded-full">
                      <img className="rounded-full h-14 w-14" src={profile} alt="" />
                    </div>
                    <div className=" h-[240px] bg-[#1A398B] rounded-3xl  w-[410px] flex flex-col">
                      <div className="h-1/3 w-full pt-5 items-center justify-center flex flex-row">
                        <div className=" w-1/2 flex ml-20 flex-col">
                          <p className="text-left font-semibold text-[20px]">Raj Patidar</p>
                          <p className="text-left text-[12px]">Mumbai, India</p>
                        </div>
                        <div className="flex items-center h-full w-1/3  justify-end pr-8">
                          <p className=" text-right text-[25px]">****</p>
                        </div>
                      </div>
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="w-9/12 h-full flex items-center justify-center ">
                          <p className="text-left text-pretty">This platform has transformed the way I stay connected with my loved ones. It’s fast, secure, and so much fun to use!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <footer className="bg-[#0C266B] text-white rounded-t-lg px-10">
        <div className="grid grid-cols-3">
          <div>
            <div className="flex text-left flex-col my-5">
              <h1 className="text-2xl font-bold">BlinckChat</h1>
              <p className="text-sm">Connect, Share, and Chat with Ease.</p>
            </div>
            <div className="text-left flex flex-col gap-1">
              <p className="text-[10px] text-gray-500">Contant Us</p>
              <p className="text-sm">support@blinkchat.com</p>
              <p className="text-sm">+91 7974918244</p>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <div className="flex gap-2 flex-col text-left ">
              <h1 className=" text-gray-500">Company</h1>
              <p className="text-sm">Home</p>
              <p className="text-sm">Feature</p>
              <p className="text-sm">Testimonals</p>
              <p className="text-sm">Contact Us</p>
            </div>
          </div>
          <div className="my-5 flex justify-center">
            <div className="text-left">
              <h1 className="text-xl font-bold">stay Updated!</h1>
              <input className="rounded-xl my-4 text-sm text-black p-2 w-full" placeholder="Enter Your Email" type="text" />
              <div className="flex gap-10 justify-end">
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-16 pb-5">
          <div className="flex text-left">© 2025 BlinkChat. All Rights Reserved.</div>
          <div className="flex justify-center gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;