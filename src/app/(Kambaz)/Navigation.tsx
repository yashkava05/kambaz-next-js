"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const isDashboard = pathname === "/Dashboard" || pathname.startsWith("/Dashboard");
  const isAccount = pathname.includes("/Account");
  const isCalendar = pathname.includes("/Calendar");
  const isInbox = pathname.includes("/Inbox");
  const isLabs = pathname.includes("/Labs");
  
  return (
    <ListGroup 
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" 
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem 
        className="bg-black border-0 text-center p-2" 
        as="a"
        target="_blank" 
        href="https://www.northeastern.edu/" 
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      
      <ListGroupItem className={`border-0 text-center p-2 ${isAccount ? "bg-white" : "bg-black"}`}>
        <Link href="/Account" id="wd-account-link" className="text-decoration-none">
          <FaRegCircleUser className={`fs-1 ${isAccount ? "text-danger" : "text-white"}`} />
          <br />
          <span className={`small ${isAccount ? "text-danger" : "text-white"}`}>Account</span>
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={`border-0 text-center p-2 ${isDashboard ? "bg-white" : "bg-black"}`}>
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-decoration-none">
          <AiOutlineDashboard className={`fs-1 ${isDashboard ? "text-danger" : "text-danger"}`} />
          <br />
          <span className={`small ${isDashboard ? "text-danger" : "text-white"}`}>Dashboard</span>
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Dashboard" id="wd-course-link" className="text-decoration-none">
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          <span className="small text-white">Courses</span>
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={`border-0 text-center p-2 ${isCalendar ? "bg-white" : "bg-black"}`}>
        <Link href="/Calendar" id="wd-calendar-link" className="text-decoration-none">
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          <span className={`small ${isCalendar ? "text-danger" : "text-white"}`}>Calendar</span>
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={`border-0 text-center p-2 ${isInbox ? "bg-white" : "bg-black"}`}>
        <Link href="/Inbox" id="wd-inbox-link" className="text-decoration-none">
          <FaInbox className="fs-1 text-danger" />
          <br />
          <span className={`small ${isInbox ? "text-danger" : "text-white"}`}>Inbox</span>
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={`border-0 text-center p-2 ${isLabs ? "bg-white" : "bg-black"}`}>
        <Link href="/Labs" id="wd-labs-link" className="text-decoration-none">
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          <span className={`small ${isLabs ? "text-danger" : "text-white"}`}>Labs</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}