import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const User_details = () => {
  const { id } =useParams();
  const employees = [
  {
    id: 1,
    name: "Arjun Menon",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    designation: "Frontend Developer",
    department: "Engineering",
    shift: "Morning",
    place: "Kochi",
    workMode: "Online",
    email: "arjun.menon@company.com",
    phone: "+91 98765 43210"
  },
  {
    id: 2,
    name: "Sneha Raj",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    designation: "HR Executive",
    department: "Human Resources",
    shift: "Day",
    place: "Trivandrum",
    workMode: "Offline",
    email: "sneha.raj@company.com",
    phone: "+91 98765 43211"
  },
  {
    id: 3,
    name: "Rahul Das",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    designation: "Backend Developer",
    department: "Engineering",
    shift: "Night",
    place: "Bangalore",
    workMode: "Online",
    email: "rahul.das@company.com",
    phone: "+91 98765 43212"
  },
  {
    id: 4,
    name: "Anjali Nair",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    designation: "UI/UX Designer",
    department: "Design",
    shift: "Day",
    place: "Kochi",
    workMode: "Hybrid",
    email: "anjali.nair@company.com",
    phone: "+91 98765 43213"
  },
  {
    id: 5,
    name: "Vishnu Kumar",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    designation: "QA Tester",
    department: "Quality Assurance",
    shift: "Morning",
    place: "Chennai",
    workMode: "Offline",
    email: "vishnu.kumar@company.com",
    phone: "+91 98765 43214"
  },
  {
    id: 6,
    name: "Neethu Joseph",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    designation: "Project Manager",
    department: "Management",
    shift: "Day",
    place: "Bangalore",
    workMode: "Hybrid",
    email: "neethu.joseph@company.com",
    phone: "+91 98765 43215"
  },
  {
    id: 7,
    name: "Akhil Varma",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    designation: "DevOps Engineer",
    department: "Infrastructure",
    shift: "Night",
    place: "Hyderabad",
    workMode: "Online",
    email: "akhil.varma@company.com",
    phone: "+91 98765 43216"
  },
  {
    id: 8,
    name: "Meera Pillai",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    designation: "Content Writer",
    department: "Marketing",
    shift: "Morning",
    place: "Kollam",
    workMode: "Online",
    email: "meera.pillai@company.com",
    phone: "+91 98765 43217"
  },
  {
    id: 9,
    name: "Suresh Babu",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    designation: "System Administrator",
    department: "IT Support",
    shift: "Night",
    place: "Coimbatore",
    workMode: "Offline",
    email: "suresh.babu@company.com",
    phone: "+91 98765 43218"
  },
  {
    id: 10,
    name: "Athira Krishnan",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    designation: "Business Analyst",
    department: "Business",
    shift: "Day",
    place: "Kochi",
    workMode: "Hybrid",
    email: "athira.krishnan@company.com",
    phone: "+91 98765 43219"
  },
  {
    id: 11,
    name: "Nikhil Thomas",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    designation: "Sales Executive",
    department: "Sales",
    shift: "Morning",
    place: "Thrissur",
    workMode: "Offline",
    email: "nikhil.thomas@company.com",
    phone: "+91 98765 43220"
  },
  {
    id: 12,
    name: "Divya Mohan",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    designation: "Digital Marketer",
    department: "Marketing",
    shift: "Day",
    place: "Calicut",
    workMode: "Online",
    email: "divya.mohan@company.com",
    phone: "+91 98765 43221"
  },
  {
    id: 13,
    name: "Kiran Raj",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    designation: "Mobile App Developer",
    department: "Engineering",
    shift: "Night",
    place: "Bangalore",
    workMode: "Hybrid",
    email: "kiran.raj@company.com",
    phone: "+91 98765 43222"
  },
  {
    id: 14,
    name: "Riya Mathew",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    designation: "Recruitment Lead",
    department: "Human Resources",
    shift: "Day",
    place: "Ernakulam",
    workMode: "Offline",
    email: "riya.mathew@company.com",
    phone: "+91 98765 43223"
  },
  {
    id: 15,
    name: "Manu Sankar",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    designation: "Cloud Engineer",
    department: "Infrastructure",
    shift: "Night",
    place: "Hyderabad",
    workMode: "Online",
    email: "manu.sankar@company.com",
    phone: "+91 98765 43224"
  },
  {
    id: 16,
    name: "Aiswarya Lal",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    designation: "Customer Support",
    department: "Support",
    shift: "Morning",
    place: "Kottayam",
    workMode: "Offline",
    email: "aiswarya.lal@company.com",
    phone: "+91 98765 43225"
  },
  {
    id: 17,
    name: "Fahad Ali",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    designation: "Data Analyst",
    department: "Analytics",
    shift: "Day",
    place: "Bangalore",
    workMode: "Online",
    email: "fahad.ali@company.com",
    phone: "+91 98765 43226"
  },
  {
    id: 18,
    name: "Lakshmi Priya",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    designation: "Finance Executive",
    department: "Finance",
    shift: "Day",
    place: "Trivandrum",
    workMode: "Offline",
    email: "lakshmi.priya@company.com",
    phone: "+91 98765 43227"
  },
  {
    id: 19,
    name: "Rohit Sharma",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    designation: "Operations Manager",
    department: "Operations",
    shift: "Morning",
    place: "Mumbai",
    workMode: "Hybrid",
    email: "rohit.sharma@company.com",
    phone: "+91 98765 43228"
  },
  {
    id: 20,
    name: "Anand Krish",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    designation: "IT Support Engineer",
    department: "IT Support",
    shift: "Night",
    place: "Chennai",
    workMode: "Offline",
    email: "anand.krish@company.com",
    phone: "+91 98765 43229"
  }
];
console.log(id);
const found=employees.filter(item=>{
  return item.id.includes(id);
 });
 found.map(items=>{
  console.log("g");
  return  ` <div class key=items.id>
      <p>{id}</p>
    </div>`
  
  });
}
// const Cardd =({items}) =>{
//   const filter=items.filter(items.id===id);
//   return (
//     <div>
//       <h3>{items.name}</h3>
//     </div>
//   )
// }

export default User_details  