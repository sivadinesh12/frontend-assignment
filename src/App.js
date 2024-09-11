import { useState } from "react";
import CountryItem from "./components/CountryItem";
import CityItem from "./components/CityItem";
import AccommodationItem from "./components/AccommodationItem";
import AccommodationCard from "./components/AccommodationCard";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [recentSearch, setRecentSearch] = useState([]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [accommodationId, setAccommodationId] = useState(1);
  const countries = [
    {
      id: 1,
      name: "United Kingdom",
      topCities: [
        {
          name: "London",
          image:
            "https://plus.unsplash.com/premium_photo-1671809692422-4893b9e09119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Leicester",
          image:
            "https://images.unsplash.com/photo-1704557099968-1d5361793986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlaWNlc3RlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Liver Pool",
          image:
            "https://plus.unsplash.com/premium_photo-1664283661697-1acf0b0c3dbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Sheffield",
          image:
            "https://images.unsplash.com/photo-1642169953871-6721806dfaf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hlZmZpZWxkJTIwZmFtb3VzfGVufDB8fDB8fHww",
        },
        {
          name: "Newcastle Upon Tyne",
          image:
            "https://plus.unsplash.com/premium_photo-1694475203842-140ce7b9828d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3Y2FzdGxlJTIwdXBvbiUyMHR5bmV8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Cardiff",
          image:
            "https://images.unsplash.com/photo-1667018128692-b00ad14dc572?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyZGlmZiUyMGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Edinburgh",
          image:
            "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRpbmJ1cmdofGVufDB8fDB8fHww",
        },
        {
          name: "Plymouth",
          image:
            "https://plus.unsplash.com/premium_photo-1694475210759-dbfac4def763?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "chester",
          image:
            "https://images.unsplash.com/photo-1591688956056-b3bf1a70c478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZXN0ZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Exeter",
          image:
            "https://plus.unsplash.com/premium_photo-1694475494054-c9110c137981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGV4ZXRlciUyMGNhdGhlZHJhbHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Birmingham",
          image:
            "https://images.unsplash.com/photo-1577083553085-d63cdcdf2fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmlybWluZ2hhbXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Nottingham",
          image:
            "https://images.unsplash.com/photo-1630344353375-2f744504def3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Tm90dGluZ2hhbXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Coventry",
          image:
            "https://images.unsplash.com/photo-1631527398526-58eeaded6494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdmVudHJ5JTIwJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Leeds",
          image:
            "https://images.unsplash.com/photo-1592990493652-7ac6eb3af901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExlZWRzfGVufDB8fDB8fHww",
        },
        {
          name: "Manchester",
          image:
            "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuY2hlc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Swansea",
          image:
            "https://images.unsplash.com/photo-1693767212490-164088d4a77b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dhbnNlYSUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Salford",
          image:
            "https://images.unsplash.com/photo-1646311239002-ce846a942cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2FsZm9yZHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Aberdeen",
          image:
            "https://images.unsplash.com/photo-1566222390006-5bd9b4a6ae23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWJlcmRlZW58ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Lincoln",
          image:
            "https://images.unsplash.com/photo-1574189937485-b94ae177a5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExpbmNvbG58ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
    {
      id: 2,
      name: "United States",
      topCities: [
        {
          name: "New York",
          image:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Austin",
          image:
            "https://plus.unsplash.com/premium_photo-1697730030250-e89c608af43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXVzdGlufGVufDB8fDB8fHww",
        },
        {
          name: "San Francisco",
          image:
            "https://images.unsplash.com/photo-1719858403527-e171e237fe59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNhbiUyMEZyYW5jaXNjb3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Dallas",
          image:
            "https://plus.unsplash.com/premium_photo-1697729819435-046df3291307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGFsbGFzfGVufDB8fDB8fHww",
        },
        {
          name: "Philadelphia",
          image:
            "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGhpbGFkZWxwaGlhfGVufDB8fDB8fHww",
        },
        {
          name: "Los Angeles",
          image:
            "https://media.istockphoto.com/id/1322778414/photo/los-angeles-griffith-observatory.webp?a=1&b=1&s=612x612&w=0&k=20&c=QbV5sQi_b8yNBZI6GHtdgoLebqjVLA7Mgj5xGwI9Up8=",
        },
        {
          name: "Miami",
          image:
            "https://images.unsplash.com/photo-1501509497947-782640bc1412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlhbWl8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Chicago",
          image:
            "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Houston",
          image:
            "https://plus.unsplash.com/premium_photo-1694475102426-d9a1d0bb57d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG91c3RvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Boston",
          image:
            "https://images.unsplash.com/photo-1506551907304-60bb62ffc9b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9zdG9ufGVufDB8fDB8fHww",
        },
        {
          name: "Washington DC",
          image:
            "https://plus.unsplash.com/premium_photo-1694475191764-09f8c42f7a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2FzaGluZ3RvbiUyMGRjfGVufDB8fDB8fHww",
        },
        {
          name: "College Station",
          image:
            "https://images.unsplash.com/photo-1679233620900-3caafba8c0bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Lubbock",
          image:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1YmJvY2slMjBjaXR5fGVufDB8fDB8fHww",
        },
        {
          name: "Minneapolis",
          image:
            "https://plus.unsplash.com/premium_photo-1670176446913-ca025ebaf172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1pbm5lYXBvbGlzfGVufDB8fDB8fHww",
        },
      ],
    },
    {
      id: 3,
      name: "Australia",
      topCities: [
        {
          name: "Melbourne",
          image:
            "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVsYm91cm5lfGVufDB8fDB8fHww",
        },
        {
          name: "Brisbane",
          image:
            "https://images.unsplash.com/photo-1566734904496-9309bb1798ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJpc2JhbmV8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Sydney",
          image:
            "https://plus.unsplash.com/premium_photo-1697730198238-48ee2f2fe1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3lkbmV5fGVufDB8fDB8fHww",
        },
        {
          name: "Adelaide",
          image:
            "https://images.unsplash.com/photo-1558406665-ce46cc44e96e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWRlbGFpZGV8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Perth",
          image:
            "https://plus.unsplash.com/premium_photo-1697729743874-1d9d21ee467d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVydGglMjBhdXN0cmFsaWF8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Canberra",
          image:
            "https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FuYmVycmF8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Gold Coast",
          image:
            "https://images.unsplash.com/photo-1661674753163-0f8bca582509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdvbGQlMjBDb2FzdHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Coffs Harbour",
          image:
            "https://plus.unsplash.com/premium_photo-1694475709022-1733697e3a5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29mZnMlMjBIYXJib3VyfGVufDB8fDB8fHww",
        },
      ],
    },
    {
      id: 4,
      name: "Canada",
      topCities: [
        {
          name: "Toronto",
          image:
            "https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9yb250b3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Montreal",
          image:
            "https://images.unsplash.com/photo-1470181942237-78ce33fec141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9udHJlYWx8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "VanCouver",
          image:
            "https://plus.unsplash.com/premium_photo-1697729974122-9c8ce287c0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFuQ291dmVyfGVufDB8fDB8fHww",
        },
      ],
    },
    {
      id: 5,
      name: "Germany",
      topCities: [
        { name: "Frankfurt", image: "" },
        { name: "Hamburg", image: "" },
      ],
    },
    {
      id: 6,
      name: "Spain",
      topCities: [
        {
          name: "Barcelona",
          image:
            "https://plus.unsplash.com/premium_photo-1661885514351-ad93dcfb25f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmFyY2Vsb25hfGVufDB8fDB8fHww",
        },
      ],
    },
    {
      id: 7,
      name: "Ireland",
      topCities: [
        {
          name: "Dublin",
          image:
            "https://plus.unsplash.com/premium_photo-1694475251117-25670174eb58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGluJTIwY2l0eSUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Cork",
          image:
            "https://images.unsplash.com/photo-1590993609526-463705d158d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];

  const accommodations = [
    {
      id: 1,
      city: "London",
      hotels: [
        {
          name: "Urban St Pancras, London",
          address: "London, England GB",
          price: 269,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "The Cube Ealing, London",
          address: "London, England GB",
          price: 270,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "New Malden Hall, London",
          address: "New Malden, England, Gb",
          price: 275,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Chapter Portobella, London",
          address: "London, England,GB",
          price: 294,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Londonist Drapery Palace, London",
          address: "London, England, GB",
          price: 295,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Chapter Old Street, London",
          address: "London England, GB",
          price: 299,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Westcombe House, London",
          address: "London, England, GB",
          price: 299,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
    {
      id: 2,
      city: "Manchester",
      hotels: [
        {
          name: "Moss Court, Manchester",
          address: "Manchester, England, GB",
          price: 205,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Riverside House, Manchester",
          address: "Salford, England, GB",
          price: 215,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Riverside House, Manchester",
          address: "Manchester, England, Gb",
          price: 218,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Canvas River Street Tower, Manchester",
          address: "Manchester, England,GB",
          price: 223,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "iQ Manchester Gardens, Manchester",
          address: "Manchester, England, GB",
          price: 230,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Ladybarn House, Manchester",
          address: "Manchester, England, GB",
          price: 240,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Square Garden, London",
          address: "Manchester, England, GB",
          price: 248,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
    {
      id: 3,
      city: "Birmingham",
      hotels: [
        {
          name: "Collegiate Bagot Street, Birmingham",
          address: "Birmingham, England, GB",
          price: 157,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Canalside, Birmingham",
          address: "Birmingham, England, GB",
          price: 200,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The Heights, Birmingham",
          address: "Birmingham, England, Gb",
          price: 218,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Onyx, Birmingham",
          address: "Birmingham, England,GB",
          price: 223,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The old Fire Station, Birmingham",
          address: "Birmingham, England, GB",
          price: 230,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Yugo Globe Works, Birmingham",
          address: "Birmingham, England, GB",
          price: 240,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Square Garden, Birmingham",
          address: "Birmingham, England, GB",
          price: 248,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
    {
      id: 4,
      city: "Nottingham",
      hotels: [
        {
          name: "Collegiate Bagot Street, Nottingham",
          address: "Nottingham, England, GB",
          price: 157,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Canalside, Nottingham",
          address: "Nottingham, England, GB",
          price: 200,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The Heights, Nottingham",
          address: "Nottingham, England, Gb",
          price: 218,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Onyx, Nottingham",
          address: "Nottingham, England,GB",
          price: 223,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The old Fire Station, Nottingham",
          address: "Nottingham, England, GB",
          price: 230,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Yugo Globe Works, Nottingham",
          address: "Nottingham, England, GB",
          price: 240,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Square Garden, Nottingham",
          address: "Nottingham, England, GB",
          price: 248,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
    {
      id: 5,
      city: "Liverpool",
      hotels: [
        {
          name: "Urban St Pancras, Liverpool",
          address: "Liverpool, England GB",
          price: 269,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "The Cube Ealing, Liverpool",
          address: "Liverpool, England GB",
          price: 270,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "New Malden Hall, Liverpool",
          address: "Liverpool, England, Gb",
          price: 275,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Chapter Portobella, Liverpool",
          address: "Liverpool, England,GB",
          price: 294,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Londonist Drapery Palace, Liverpool",
          address: "Liverpool, England, GB",
          price: 295,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Chapter Old Street, Liverpool",
          address: "Liverpool England, GB",
          price: 299,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Westcombe House, Liverpool",
          address: "Liverpool, England, GB",
          price: 299,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
    {
      id: 6,
      city: "Leicester",
      hotels: [
        {
          name: "Collegiate Bagot Street, Leicester",
          address: "Leicester, England, GB",
          price: 157,
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Canalside, Leicester",
          address: "Leicester, England, GB",
          price: 200,
          image:
            "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The Heights, Leicester",
          address: "Leicester, England, Gb",
          price: 218,
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Onyx, Leicester",
          address: "Leicester, England,GB",
          price: 223,
          image:
            "https://plus.unsplash.com/premium_photo-1663126953248-3b3bd25402e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The old Fire Station, Leicester",
          address: "Leicester, England, GB",
          price: 230,
          image:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjAlMjBiZWQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Yugo Globe Works, Leicester",
          address: "Leicester, England, GB",
          price: 240,
          image:
            "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwJTIwYmVkJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Square Garden, Leicester",
          address: "Leicester, England, GB",
          price: 248,
          image:
            "https://assets.amberstudent.com/inventories/936589/cc8f771a.jpg?w=480&h=360&fit=crop&q=70&auto=format&trim=auto",
        },
      ],
    },
  ];

  const selectedCountry = countries.find(
    (country) => country.id === activeTabId
  );

  const accommodationItemArray = accommodations.find(
    (each) => each.id === accommodationId
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (recentSearch > 5) {
      recentSearch.shift();
    }
    setRecentSearch([...recentSearch, searchInput]);
    setSearchInput("");
  };

  const handleAccommodationSection = (id) => {
    setAccommodationId(id);
  };
  return (
    <div className="bg-container">
      <div className="hero-section">
        <nav className="nav-bar align-items-center">
          <div className="logo-input-container">
            <h1 className="logo">amber</h1>
          </div>
          <div className="nav-sec d-flex flex-row align-items-center">
            <a className="nav-sec-item" href="#">
              Download App
            </a>
            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    +91 987654321
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Contact@amber.com
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="nav-sec-item">
              Short List
            </a>
          </div>
        </nav>
        <div className="hero-title-card d-flex flex-column justify-content-center align-items-center">
          <h1 className="hero-tittle">Home away from home</h1>
          <p className="hero-des">
            Book student accommodations near top universities and cities across
            the globe
          </p>
          <div className="d-flex flex-row">
            <p className="mx-3 services-item">Verified Properties</p>
            <p className="mx-3 services-item">24x7 Assistance</p>
            <p className="mx-3 services-item">Low Price Guarantee</p>
          </div>
          <div className="input-container">
            <input
              type="search"
              className="input"
              onChange={handleSearchInputChange}
              value={searchInput}
              placeholder="Search by city university or property"
            />
            <div className="icon-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="search-icon"
                onClick={handleSearch}
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
          <div className="d-flex flex-row mt-3 align-items-center">
            <p className="mx-3 recent-search">Recent Searches</p>
            {recentSearch.map((each) => (
              <p className="mx-3 search-item">{each}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="popular-cities-across-globe-section container mt-3">
        <h2 className="popular-cities-heading">Popular Cities Across Globe</h2>
        <p className="popular-cities-description">
          Book student accommodations near top universities and cities across
          the globe
        </p>
        <ul className="countries-container d-flex flex-row ">
          {countries.map((country) => (
            <CountryItem
              key={country.id}
              country={country}
              setActiveTabId={setActiveTabId}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        <ul className="cities-container d-flex flex-row">
          {selectedCountry?.topCities.map((city) => (
            <CityItem key={city.name} city={city} />
          ))}
        </ul>
      </div>
      <div className="accommodation-section container">
        <h2 className="accommodation-heading">
          Accommodations In Popular Cities
        </h2>
        <p className="accommodation-description">
          Choose a perfect place to call home in top cities
        </p>
        <ul className="accommodations-container d-flex flex-row">
          {accommodations.map((city) => (
            <AccommodationItem
              key={city.id}
              eachCity={city}
              handleAccommodation={handleAccommodationSection}
              accommodationId={accommodationId}
            />
          ))}
        </ul>
        <ul className="accommodation-card-container d-flex flex-row">
          {accommodationItemArray?.hotels.map((accommodation) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
            />
          )) || <p>No accommodations found</p>}
        </ul>
      </div>
      <div className="container insights-section d-flex flex-row">
        <div className="insight-container">
          <img
            src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/homepage-beds.svg"
            alt="beds"
          />
          <h2 className="insight-heading">1M+ Beds</h2>
          <p className="insights-description">
            Book Your perfect From an Extensive<br></br> list of options.
          </p>
        </div>
        <div className="insight-container">
          <img
            src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/homepage-universities.svg"
            alt="universities"
          />
          <h2 className="insight-heading">800+ Universities</h2>
          <p className="insights-description">
            Find the best student homes near<br></br>prestigious universities.
          </p>
        </div>
        <div className="insight-container">
          <img
            src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/homepage-cities.svg"
            alt="global"
          />
          <h2 className="insight-heading">250+ Globe Cities</h2>
          <p className="insights-description">
            We operate major cities around the<br></br>world.
          </p>
        </div>
        <div className="insight-container">
          <img
            src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
            alt="rating"
          />
          <h2 className="insight-heading">4.8/5 on Trustpilot</h2>
          <p className="insights-description">
            5000+ students have rated us excellent <br></br>for our services.
          </p>
        </div>
      </div>
      <div className="container review-section">
        <div className="d-flex align-items-center">
          <h2 className="review-heading">
            What do students have to say about us?
          </h2>
          <div className="rating-container">
            <img
              src="https://prod-static-assets.amberstudent.com/images/star.svg"
              alt="star"
            />
            <p className="rating">
              Trustpilot <span>4.8/5</span>
            </p>
          </div>
        </div>
        <p>Over 1M students trust amber for their student housing needs</p>
        <div className="review-cards-container d-flex flex-row ">
          <div className="review-card">
            <p>
              Really prompt service. It took me hardly one day to get my room
              booked would definitely recommend it.
            </p>
            <div className="d-flex ">
              <img
                src="https://prod-static-assets.amberstudent.com/images/in_flag.svg?auto=format&trim=auto"
                className="flag mx-3"
                alt="flag"
              />
              <div>
                <strong>Siddharth</strong>
                <p>Sheffield Hallam University</p>
              </div>
            </div>
          </div>
          <div className="review-card">
            <p>
              The agent was constantly checking up on me at every stage of the
              process to ensure that the process was smooth.
            </p>
            <div className="d-flex ">
              <img
                src="https://prod-static-assets.amberstudent.com/images/in_flag.svg?auto=format&trim=auto"
                className="flag mx-3"
                alt="flag"
              />
              <div>
                <strong>JAYATI</strong>
                <p>London School Of Economics And Political Science</p>
              </div>
            </div>
          </div>
          <div className="review-card">
            <p>
              Amber's the website is very Resourceful also kudos to their agent
              for making the process Swift and seamless.
            </p>
            <div className="d-flex ">
              <img
                src="https://prod-static-assets.amberstudent.com/images/gb_flag.svg?auto=format&trim=auto"
                className="flag mx-3"
                alt="flag"
              />
              <div>
                <strong>Praneet</strong>
                <p>National College Of Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container sub-section">
        <div>
          <h2 className="heading">Book your Perfect Accommodation</h2>
          <p className="description">
            Take the hassle out of securing your student home for the best years
            of your life
          </p>
          <div className="sub-section-card-container">
            <div className="insight-container">
              <img
                src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/fast-and-easy-bookings-insight.svg"
                alt="universities"
              />
              <h2 className="insight-heading">Quick & Easy Bookings</h2>
              <p className="insights-description">
                Time is money. Save both when you book with us..
              </p>
            </div>
            <div className="insight-container">
              <img
                src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/expert-assistance-insight.svg"
                alt="universities"
              />
              <h2 className="insight-heading">Price-Match Guarantee</h2>
              <p className="insights-description">
                Find a lower price and we'll match it. No questions asked..
              </p>
            </div>
            <div className="insight-container">
              <img
                src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/verified-listings-insight.svg"
                alt="universities"
              />
              <h2 className="insight-heading">24x7 Assistance</h2>
              <p className="insights-description">
                If you have a doubt or a query, we’re always a call away..
              </p>
            </div>
            <div className="insight-container">
              <img
                src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/price-match-guarantee-insight.svg"
                alt="universities"
              />
              <h2 className="insight-heading">100% Verified Listings</h2>
              <p className="insights-description">
                We promise to deliver what you see on the website..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section container d-flex">
        <div className="d-flex flex-column about-item">
          <div>
            <h1>amber</h1>
            <p>amber 2024, All rights reserved</p>
            <div className="d-flex align-items-center">
              <img
                src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
                alt="rating"
              />
              <p className="rating">4.8/5 on Trustpilot</p>
            </div>
          </div>
          <div>
            <div>
              <h2>Get App</h2>
              <div>
                <img src="https://prod-static-assets.amberstudent.com/images/playstore-android.svg?auto=format&trim=auto" />
                <img src="https://prod-static-assets.amberstudent.com/images/app-store.svg?auto=format&trim=auto" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <strong>Company</strong>
          <p>About</p>
          <p>How it Works</p>
          <p>Refer a Friend</p>
          <p>Group Bookings</p>
          <p>List with us </p>
          <p>Partner With us</p>
          <p>Universities</p>
          <p>Careers</p>
        </div>
        <div>
          <strong>Company</strong>
          <p>Blog</p>
          <p>Podcasts</p>
          <p>News Room</p>
          <p>Amber Plus</p>
          <p>Media mention</p>
          <p>Ambassador</p>
          <p>ScholorShip</p>
          <p>Exams</p>
        </div>
        <div>
          <strong>Support</strong>
          <p>Help Center</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
