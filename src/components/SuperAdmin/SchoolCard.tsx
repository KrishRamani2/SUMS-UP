// import React, { useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardHeader } from "../../components/ui/card";
// import { MapPin, ArrowUpDown } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
// import { stateData } from './Schooldata';
// import { useSchoolStore } from '../../store/stateStore';

// interface School {
//   name: string;
//   attendance: number;
// }

// interface DisplayData {
//   title: string;
//   image: string;
//   totalSchools: number;
//   schools: School[];
// }

// const SchoolStats: React.FC = () => {
//   const navigate = useNavigate();
//   const { 
//     selectedYear, 
//     selectedState, 
//     sortOrder,
//     selectedDistrict,
//     setSelectedYear,
//     setSelectedState,
//     setSortOrder,
//     setSelectedDistrict 
//   } = useSchoolStore();

//   const years = ["2025", "2024", "2023", "2022", "2021"];

//   const displayData = useMemo<DisplayData[]>(() => {
//     if (selectedState === "All") {
//       return stateData.states
//         .map(state => ({
//           title: state.state,
//           image: state.image,
//           totalSchools: state.totalSchools,
//           schools: state.topSchools, // Use state-level topSchools
//         }))
//         .sort((a, b) => {
//           return sortOrder === "asc" 
//             ? a.title.localeCompare(b.title)
//             : b.title.localeCompare(a.title);
//         });
//     }
    
//     const state = stateData.states.find(s => s.state === selectedState);
//     if (!state) return [];

//     return state.districts.map(district => ({
//       title: district.name,
//       image: district.image,
//       totalSchools: district.totalSchools,
//       schools: district.topSchools, // Use district-level topSchools
//     }));
//   }, [selectedState, sortOrder]);

//   const handleCardClick = (districtTitle: string): void => {
//     if (selectedState !== "All") {
//       setSelectedDistrict(districtTitle);
//       const formattedDistrict = districtTitle.toLowerCase().replace(/\s+/g, '-');
//       const formattedState = selectedState.toLowerCase();
//       navigate(`/super-admin/${formattedState}/${formattedDistrict}/${selectedYear}`);
//     }
//   };

//   const handleYearChange = (year: string): void => {
//     setSelectedYear(year);
//     if (selectedState !== "All" && selectedDistrict) {
//       const formattedDistrict = selectedDistrict.toLowerCase().replace(/\s+/g, '-');
//       const formattedState = selectedState.toLowerCase();
//       navigate(`/super-admin/${formattedState}/${formattedDistrict}/${year}`);
//     }
//   };

//   const handleSortOrderChange = (): void => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   return (
//     <div className="p-6 bg-white rounded-xl">
//       <div className="flex justify-between items-center mb-6 gap-4">
//         <div className="flex gap-4">
//           <Select value={selectedState} onValueChange={setSelectedState}>
//             <SelectTrigger className="w-40">
//               <SelectValue placeholder="Select State" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="All">All States</SelectItem>
//               {stateData.states.map((state) => (
//                 <SelectItem key={state.state} value={state.state}>
//                   {state.state}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           {selectedState === "All" && (
//             <button 
//               onClick={handleSortOrderChange}
//               className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
//             >
//               Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
//               <ArrowUpDown className="h-4 w-4" />
//             </button>
//           )}
//         </div>
//         <MapPin className="text-gray-500" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {displayData.map((data) => (
//           <Card 
//             key={data.title} 
//             className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => handleCardClick(data.title)}
//           >
//             <img 
//               src={data.image} 
//               alt={`${data.title} schools`}
//               className="w-full h-48 object-cover"
//             />
//             <CardHeader className="bg-green-800 text-white p-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold">{data.title}</h3>
//                 <Select 
//                   value={selectedYear} 
//                   onValueChange={handleYearChange}
//                 >
//                   <SelectTrigger className="w-24 bg-white/20 border-0 text-white">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {years.map(year => (
//                       <SelectItem key={year} value={year}>
//                         {year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </CardHeader>
//             <CardContent className="p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-sm font-medium">Total Schools</span>
//                 <span className="font-bold">{data.totalSchools}</span>
//               </div>
              
//               <div className="space-y-3">
//                 <div className="grid grid-cols-2 text-sm font-medium">
//                   <span>School Name</span>
//                   <span className="text-right">Attendance %</span>
//                 </div>
//                 {data.schools.map((school, idx) => (
//                   <div key={idx} className="grid grid-cols-2 text-sm border-b pb-2">
//                     <span className="text-gray-600 pr-2">{school.name}</span>
//                     <span className="text-right">{school.attendance}%</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SchoolStats;
import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useSchoolStore } from '../../store/stateStore';

// Import images (assuming these are imported elsewhere in your project)
import School1 from "../images/school.jpg"; // Assuming School1 for Andhra Pradesh
import School15 from "../images/School15.jpg";
import School4 from "../images/school4.jpg";
import School13 from "../images/School13.jpg";
import School12 from "../images/School12.jpg";
import School11 from "../images/School11.jpg";

interface School {
  name: string;
  attendance: number;
  ruralMale?: number;
  ruralFemale?: number;
  ruralTotal?: number;
  urbanMale?: number;
  urbanFemale?: number;
  urbanTotal?: number;
  total?: number;
}

interface District {
  name: string;
  totalSchools: number;
  image: string;
  topSchools: School[];
}

interface State {
  state: string;
  image: string;
  totalSchools: number;
  topSchools: School[];
  districts: District[];
}

// Andhra Pradesh data
const uttarPradeshData: State = {
  state: "UTTAR PRADESH",
  image: School1,
  totalSchools: 600,
  topSchools: [
    { name: "JNV Lucknow (Boys) Barabanki", attendance: 91.5 },
    { name: "JNV Kanpur School (Girls) Akbarpur", attendance: 89.8 },
    { name: "JNV Varanasi School (Boys) Chandauli", attendance: 87.6 },
    { name: "JNV(Mrs) (Boys) Ghazipur", attendance: 86.4 },
    { name: "Jawahar Navodaya Vidyalaya, Meerut", attendance: 85.2 },
  ],
  districts: [
    {
      name: "Lucknow",
      totalSchools: 150,
      image: School15,
      topSchools: [
        {
          name: "Lucknow Public School",
          attendance: 93.2,
          ruralMale: 92.1,
          ruralFemale: 90.4,
          ruralTotal: 91.2,
          urbanMale: 94.5,
          urbanFemale: 93.1,
          urbanTotal: 93.8,
          total: 93.2
        },
        {
          name: "City Montessori School",
          attendance: 90.8,
          ruralMale: 89.6,
          ruralFemale: 88.0,
          ruralTotal: 88.8,
          urbanMale: 92.3,
          urbanFemale: 90.9,
          urbanTotal: 91.6,
          total: 90.8
        },
        {
          name: "Kendriya Vidyalaya Gomtinagar",
          attendance: 89.5,
          ruralMale: 88.3,
          ruralFemale: 86.7,
          ruralTotal: 87.5,
          urbanMale: 91.0,
          urbanFemale: 89.6,
          urbanTotal: 90.3,
          total: 89.5
        },
        {
          name: "St. Francis College",
          attendance: 88.7,
          ruralMale: 87.5,
          ruralFemale: 85.9,
          ruralTotal: 86.7,
          urbanMale: 90.2,
          urbanFemale: 88.8,
          urbanTotal: 89.5,
          total: 88.7
        },
        {
          name: "La Martiniere College",
          attendance: 87.9,
          ruralMale: 86.7,
          ruralFemale: 85.1,
          ruralTotal: 85.9,
          urbanMale: 89.4,
          urbanFemale: 88.0,
          urbanTotal: 88.7,
          total: 87.9
        },
      ],
    },
    {
      name: "Kanpur",
      totalSchools: 120,
      image: School4,
      topSchools: [
        {
          name: "Seth Anandram Jaipuria School",
          attendance: 92.5,
          ruralMale: 91.4,
          ruralFemale: 89.7,
          ruralTotal: 90.5,
          urbanMale: 93.8,
          urbanFemale: 92.4,
          urbanTotal: 93.1,
          total: 92.5
        },
        {
          name: "Delhi Public School Kalyanpur",
          attendance: 90.1,
          ruralMale: 89.0,
          ruralFemale: 87.3,
          ruralTotal: 88.1,
          urbanMale: 91.4,
          urbanFemale: 90.0,
          urbanTotal: 90.7,
          total: 90.1
        },
        {
          name: "Sir Padampat Singhania",
          attendance: 88.9,
          ruralMale: 87.8,
          ruralFemale: 86.1,
          ruralTotal: 86.9,
          urbanMale: 90.2,
          urbanFemale: 88.8,
          urbanTotal: 89.5,
          total: 88.9
        },
        {
          name: "Billabong High School",
          attendance: 87.6,
          ruralMale: 86.5,
          ruralFemale: 84.8,
          ruralTotal: 85.6,
          urbanMale: 88.9,
          urbanFemale: 87.5,
          urbanTotal: 88.2,
          total: 87.6
        },
        {
          name: "Wendy School",
          attendance: 86.8,
          ruralMale: 85.7,
          ruralFemale: 84.0,
          ruralTotal: 84.8,
          urbanMale: 88.1,
          urbanFemale: 86.7,
          urbanTotal: 87.4,
          total: 86.8
        },
      ],
    },
    {
      name: "Varanasi",
      totalSchools: 130,
      image: School13,
      topSchools: [
        {
          name: "Sunbeam School Lahartara",
          attendance: 91.8,
          ruralMale: 90.7,
          ruralFemale: 89.0,
          ruralTotal: 89.8,
          urbanMale: 93.1,
          urbanFemale: 91.7,
          urbanTotal: 92.4,
          total: 91.8
        },
        {
          name: "Delhi Public School Varanasi",
          attendance: 89.6,
          ruralMale: 88.5,
          ruralFemale: 86.8,
          ruralTotal: 87.6,
          urbanMale: 90.9,
          urbanFemale: 89.5,
          urbanTotal: 90.2,
          total: 89.6
        },
        {
          name: "St. John's School DLW",
          attendance: 88.2,
          ruralMale: 87.1,
          ruralFemale: 85.4,
          ruralTotal: 86.2,
          urbanMale: 89.5,
          urbanFemale: 88.1,
          urbanTotal: 88.8,
          total: 88.2
        },
        {
          name: "Little Flower House",
          attendance: 87.4,
          ruralMale: 86.3,
          ruralFemale: 84.6,
          ruralTotal: 85.4,
          urbanMale: 88.7,
          urbanFemale: 87.3,
          urbanTotal: 88.0,
          total: 87.4
        },
        {
          name: "Glenhill School",
          attendance: 86.6,
          ruralMale: 85.5,
          ruralFemale: 83.8,
          ruralTotal: 84.6,
          urbanMale: 87.9,
          urbanFemale: 86.5,
          urbanTotal: 87.2,
          total: 86.6
        },
      ],
    },
    {
      name: "Agra",
      totalSchools: 100,
      image: School12,
      topSchools: [
        {
          name: "St. Peter's College",
          attendance: 92.1,
          ruralMale: 91.0,
          ruralFemale: 89.3,
          ruralTotal: 90.1,
          urbanMale: 93.4,
          urbanFemale: 92.0,
          urbanTotal: 92.7,
          total: 92.1
        },
        {
          name: "DPS Agra",
          attendance: 90.4,
          ruralMale: 89.3,
          ruralFemale: 87.6,
          ruralTotal: 88.4,
          urbanMale: 91.7,
          urbanFemale: 90.3,
          urbanTotal: 91.0,
          total: 90.4
        },
        {
          name: "St. Clare's School",
          attendance: 88.8,
          ruralMale: 87.7,
          ruralFemale: 86.0,
          ruralTotal: 86.8,
          urbanMale: 90.1,
          urbanFemale: 88.7,
          urbanTotal: 89.4,
          total: 88.8
        },
        {
          name: "Holy Public School",
          attendance: 87.9,
          ruralMale: 86.8,
          ruralFemale: 85.1,
          ruralTotal: 85.9,
          urbanMale: 89.2,
          urbanFemale: 87.8,
          urbanTotal: 88.5,
          total: 87.9
        },
        {
          name: "Prelude Public School",
          attendance: 87.1,
          ruralMale: 86.0,
          ruralFemale: 84.3,
          ruralTotal: 85.1,
          urbanMale: 88.4,
          urbanFemale: 87.0,
          urbanTotal: 87.7,
          total: 87.1
        },
      ],
    },
    {
      name: "Meerut",
      totalSchools: 110,
      image: School11,
      topSchools: [
        {
          name: "Meerut Public School",
          attendance: 91.6,
          ruralMale: 90.5,
          ruralFemale: 88.8,
          ruralTotal: 89.6,
          urbanMale: 92.9,
          urbanFemale: 91.5,
          urbanTotal: 92.2,
          total: 91.6
        },
        {
          name: "St. Mary's Academy",
          attendance: 89.9,
          ruralMale: 88.8,
          ruralFemale: 87.1,
          ruralTotal: 87.9,
          urbanMale: 91.2,
          urbanFemale: 89.8,
          urbanTotal: 90.5,
          total: 89.9
        },
        {
          name: "Delhi Public School Meerut",
          attendance: 88.5,
          ruralMale: 87.4,
          ruralFemale: 85.7,
          ruralTotal: 86.5,
          urbanMale: 89.8,
          urbanFemale: 88.4,
          urbanTotal: 89.1,
          total: 88.5
        },
        {
          name: "K.L. International School",
          attendance: 87.7,
          ruralMale: 86.6,
          ruralFemale: 84.9,
          ruralTotal: 85.7,
          urbanMale: 89.0,
          urbanFemale: 87.6,
          urbanTotal: 88.3,
          total: 87.7
        },
        {
          name: "Vidya Mandir School",
          attendance: 86.9,
          ruralMale: 85.8,
          ruralFemale: 84.1,
          ruralTotal: 84.9,
          urbanMale: 88.2,
          urbanFemale: 86.8,
          urbanTotal: 87.5,
          total: 86.9
        },
      ],
    },
  ],
};

interface DisplayData {
  title: string;
  image: string;
  totalSchools: number;
  schools: School[];
}

const SchoolStats: React.FC = () => {
  const navigate = useNavigate();
  const { 
    selectedYear, 
    selectedDistrict,
    setSelectedYear,
    setSelectedState,
    setSelectedDistrict 
  } = useSchoolStore();

  const years = ["2025", "2024", "2023", "2022", "2021"];
  
  // Set state to Andhra Pradesh on component mount
  useEffect(() => {
    setSelectedState("UTTAR PRADESH");
  }, [setSelectedState]);

  const displayData = useMemo<DisplayData[]>(() => {
    // Map Andhra Pradesh's districts to the display format
    return uttarPradeshData.districts.map(district => ({
      title: district.name,
      image: district.image,
      totalSchools: district.totalSchools,
      schools: district.topSchools,
    }));
  }, []);

  const handleCardClick = (districtTitle: string): void => {
    setSelectedDistrict(districtTitle);
    const formattedDistrict = districtTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/super-admin/andhra-pradesh/${formattedDistrict}/${selectedYear}`);
  };

  const handleYearChange = (year: string): void => {
    setSelectedYear(year);
    if (selectedDistrict) {
      const formattedDistrict = selectedDistrict.toLowerCase().replace(/\s+/g, '-');
      navigate(`/super-admin/andhra-pradesh/${formattedDistrict}/${year}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-600">Districts ({uttarPradeshData.districts.length})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Total Schools:</span>
          <span className="font-bold">{uttarPradeshData.totalSchools}</span>
          <MapPin className="text-green-600 ml-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayData.map((data) => (
          <Card 
            key={data.title} 
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleCardClick(data.title)}
          >
            <img 
              src={data.image} 
              alt={`${data.title} schools`}
              className="w-full h-48 object-cover"
            />
            <CardHeader className="bg-green-800 text-white p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{data.title}</h3>
                <Select 
                  value={selectedYear} 
                  onValueChange={handleYearChange}
                >
                  <SelectTrigger className="w-24 bg-white/20 border-0 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Total Schools</span>
                <span className="font-bold">{data.totalSchools}</span>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 text-sm font-medium">
                  <span>School Name</span>
                  <span className="text-right">Attendance %</span>
                </div>
                {data.schools.map((school, idx) => (
                  <div key={idx} className="grid grid-cols-2 text-sm border-b pb-2">
                    <span className="text-gray-600 pr-2 truncate" title={school.name}>{school.name}</span>
                    <span className="text-right">{school.attendance}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SchoolStats;