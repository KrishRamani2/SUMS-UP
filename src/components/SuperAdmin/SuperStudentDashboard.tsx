import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '../ui/tabs';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Trophy, 
  School, 
  Award, 
  Bookmark, 
  Star, 
  TrendingUp, 
  User, 
  Users, 
  Medal
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import Header from './Header';

// Define types for the data structures
interface DistrictData {
  name: string;
  average: number;
  topScore: number;
}

interface SchoolPerformance {
  name: string;
  average: number;
  rank: number;
}

interface TopStudent {
  id: number;
  name: string;
  school: string;
  grade: number;
  gpa: number;
  achievements: string[];
  avg: number;
}

interface SchoolDetails {
  students: number;
  teachers: number;
  programs: string[];
  topStudents: {
    name: string;
    gpa: number;
    grade: number;
    achievements: string[];
  }[];
  performanceTrend: {
    year: string;
    average: number;
  }[];
}

// Define the specific school names as a union type for Uttar Pradesh
type SchoolName = 
  | 'Lucknow Public School' 
  | 'Seth Anandram Jaipuria School' 
  | 'Sunbeam School Lahartara' 
  | 'St. Peter\'s College';

// Define SchoolsDetails type with specific keys
type SchoolsDetails = {
  [K in SchoolName]: SchoolDetails;
};

const SuperStudentDashboard = () => {
  const [activeSchool, setActiveSchool] = useState<SchoolName>('Lucknow Public School');
  
  // Sample data
  const districtData: DistrictData[] = [
    { name: 'Mathematics', average: 85, topScore: 99 },
    { name: 'Science', average: 82, topScore: 98 },
    { name: 'English', average: 88, topScore: 97 },
    { name: 'History', average: 79, topScore: 96 },
    { name: 'Computer Science', average: 90, topScore: 100 },
    { name: 'Arts', average: 86, topScore: 99 },
  ];
  
  const schoolPerformanceData: SchoolPerformance[] = [
    { name: 'Lucknow Public School', average: 93, rank: 1 },
    { name: 'Seth Anandram Jaipuria School', average: 91, rank: 2 },
    { name: 'Sunbeam School Lahartara', average: 89, rank: 3 },
    { name: 'St. Peter\'s College', average: 88, rank: 4 },
    { name: 'Meerut Public School', average: 86, rank: 5 },
    { name: 'City Montessori School', average: 84, rank: 6 },
  ];

  const topStudents: TopStudent[] = [
    { 
      id: 1, 
      name: 'Priya Sharma', 
      school: 'Lucknow Public School', 
      grade: 12, 
      gpa: 4.0, 
      achievements: [
        'National Science Olympiad Winner', 
        'State Math Champion', 
        'Merit Scholarship Recipient'
      ], 
      avg: 99.5 
    },
    { 
      id: 2, 
      name: 'Arjun Singh', 
      school: 'Seth Anandram Jaipuria School', 
      grade: 11, 
      gpa: 3.98, 
      achievements: [
        'Regional Debate Winner', 
        'Physics Research Award', 
        'Chess Grandmaster'
      ], 
      avg: 98.9 
    },
    { 
      id: 3, 
      name: 'Ananya Gupta', 
      school: 'Sunbeam School Lahartara', 
      grade: 8, 
      gpa: 4.0, 
      achievements: [
        'State Spelling Bee Winner', 
        'Young Poet Award', 
        'Junior Model UN Best Delegate'
      ], 
      avg: 98.3 
    },
    { 
      id: 4, 
      name: 'Rohan Verma', 
      school: 'St. Peter\'s College', 
      grade: 10, 
      gpa: 3.96, 
      achievements: [
        'Robotics National Champion', 
        'Coding Excellence Award', 
        'Science Exhibition Winner'
      ], 
      avg: 97.9 
    },
    { 
      id: 5, 
      name: 'Sneha Yadav', 
      school: 'Meerut Public School', 
      grade: 12, 
      gpa: 3.97, 
      achievements: [
        'Community Leadership Award', 
        'State History Quiz Winner', 
        'School Band Leader'
      ], 
      avg: 97.6 
    },
  ];

  const schoolsDetails: SchoolsDetails = {
    'Lucknow Public School': {
      students: 1350,
      teachers: 85,
      programs: ['Science', 'Arts', 'Sports'],
      topStudents: [
        { name: 'Priya Sharma', gpa: 4.0, grade: 12, achievements: ['National Science Olympiad Winner'] },
        { name: 'Amit Kumar', gpa: 3.95, grade: 11, achievements: ['State Math Competition Finalist'] },
        { name: 'Neha Singh', gpa: 3.94, grade: 10, achievements: ['Classical Dance Award'] }
      ],
      performanceTrend: [
        { year: '2020', average: 87 },
        { year: '2021', average: 88 },
        { year: '2022', average: 90 },
        { year: '2023', average: 91 },
        { year: '2024', average: 93 }
      ]
    },
    'Seth Anandram Jaipuria School': {
      students: 1100,
      teachers: 70,
      programs: ['CBSE Curriculum', 'Debate', 'Technology'],
      topStudents: [
        { name: 'Arjun Singh', gpa: 3.98, grade: 11, achievements: ['Regional Debate Winner'] },
        { name: 'Kavita Mishra', gpa: 3.93, grade: 12, achievements: ['Science Project Award'] },
        { name: 'Vikram Patel', gpa: 3.91, grade: 10, achievements: ['Chess Tournament Finalist'] }
      ],
      performanceTrend: [
        { year: '2020', average: 85 },
        { year: '2021', average: 86 },
        { year: '2022', average: 88 },
        { year: '2023', average: 89 },
        { year: '2024', average: 91 }
      ]
    },
    'Sunbeam School Lahartara': {
      students: 800,
      teachers: 50,
      programs: ['Literature', 'Mathematics', 'Performing Arts'],
      topStudents: [
        { name: 'Ananya Gupta', gpa: 4.0, grade: 8, achievements: ['State Spelling Bee Winner'] },
        { name: 'Rahul Tiwari', gpa: 3.97, grade: 7, achievements: ['Math Quiz Champion'] },
        { name: 'Shreya Dubey', gpa: 3.94, grade: 8, achievements: ['School Play Lead'] }
      ],
      performanceTrend: [
        { year: '2020', average: 83 },
        { year: '2021', average: 84 },
        { year: '2022', average: 85 },
        { year: '2023', average: 87 },
        { year: '2024', average: 89 }
      ]
    },
    'St. Peter\'s College': {
      students: 900,
      teachers: 60,
      programs: ['College Prep', 'Fine Arts', 'Athletics'],
      topStudents: [
        { name: 'Rohan Verma', gpa: 3.96, grade: 10, achievements: ['Robotics National Champion'] },
        { name: 'Aditi Rana', gpa: 3.94, grade: 11, achievements: ['History Essay Winner'] },
        { name: 'Siddharth Jain', gpa: 3.92, grade: 12, achievements: ['Basketball Team Captain'] }
      ],
      performanceTrend: [
        { year: '2020', average: 82 },
        { year: '2021', average: 83 },
        { year: '2022', average: 85 },
        { year: '2023', average: 86 },
        { year: '2024', average: 88 }
      ]
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-slate-50 p-6 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Academic Excellence Dashboard</h1>
            <p className="text-slate-500">Tracking achievement across State, District, and Schools</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Trophy size={16} className="text-amber-500" />
              2024-2025
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Download Report
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-indigo-800 flex items-center gap-2">
                <Trophy size={20} className="text-amber-500" />
                State Ranking
              </CardTitle>
              <CardDescription>Overall state performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-indigo-700">3rd</p>
                  <p className="text-sm text-slate-500">out of 75 districts</p> {/* Updated for UP's districts */}
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  +2 from last year
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                <Users size={20} className="text-purple-500" />
                District Average
              </CardTitle>
              <CardDescription>Academic performance score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-purple-700">86.2%</p>
                  <p className="text-sm text-slate-500">across all subjects</p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  +1.3% from last year
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-800 flex items-center gap-2">
                <Award size={20} className="text-amber-500" />
                Top Student
              </CardTitle>
              <CardDescription>Highest achieving student</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-amber-700">Priya Sharma</p>
                  <p className="text-sm text-slate-500">Lucknow Public School · 99.5% Average</p>
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Medal size={16} className="mr-1" />
                  3 Awards
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="students">Top Students</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">District Performance by Subject</CardTitle>
                  <CardDescription>Average scores and top scores across the district</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={districtData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="average" fill="#6366f1" name="District Average" />
                      <Bar dataKey="topScore" fill="#f59e0b" name="Top Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">School Rankings</CardTitle>
                  <CardDescription>Average performance across all schools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schoolPerformanceData.map((school, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold mr-3">
                          {school.rank}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-medium text-slate-800">{school.name}</h4>
                            <span className="text-slate-700 font-medium">{school.average}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-indigo-600 h-2 rounded-full" 
                              style={{ width: `${school.average}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schools">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="md:col-span-1 bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-800">Schools</CardTitle>
                  <CardDescription>Select a school to view details</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-96 px-4">
                    {Object.keys(schoolsDetails).map((school) => (
                      <div 
                        key={school}
                        onClick={() => setActiveSchool(school as SchoolName)}
                        className={`p-3 mb-2 rounded-lg cursor-pointer transition-all ${activeSchool === school ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center">
                          <School size={18} className={activeSchool === school ? 'text-indigo-600' : 'text-slate-400'} />
                          <span className={`ml-2 font-medium ${activeSchool === school ? 'text-indigo-700' : 'text-slate-700'}`}>{school}</span>
                        </div>
                        <div className="flex items-center mt-2 text-xs text-slate-500">
                          <Users size={14} className="mr-1" />
                          {schoolsDetails[school as SchoolName].students} Students
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-3">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-slate-800">{activeSchool}</CardTitle>
                      <CardDescription>School performance and top students</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-indigo-600 border-indigo-200 bg-indigo-50 px-3">
                      Rank #{schoolPerformanceData.find(s => s.name === activeSchool)?.rank || '-'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center text-slate-500 mb-1">
                        <Users size={16} className="mr-2" />
                        Students
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{schoolsDetails[activeSchool].students}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center text-slate-500 mb-1">
                        <User size={16} className="mr-2" />
                        Teachers
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{schoolsDetails[activeSchool].teachers}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center text-slate-500 mb-1">
                        <Star size={16} className="mr-2" />
                        Specialized Programs
                      </div>
                      <div className="flex gap-2 mt-1">
                        {schoolsDetails[activeSchool].programs.map((program: string, idx: number) => (
                          <Badge key={idx} variant="secondary">{program}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Performance Trend</h3>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={schoolsDetails[activeSchool].performanceTrend}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis domain={[75, 100]} /> {/* Adjusted domain for UP data */}
                          <Tooltip />
                          <Line type="monotone" dataKey="average" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Top Performers</h3>
                      <div className="space-y-3">
                        {schoolsDetails[activeSchool].topStudents.map((student, idx: number) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                            <div>
                              <p className="font-medium text-slate-800">{student.name}</p>
                              <p className="text-sm text-slate-500">Grade {student.grade} · GPA {student.gpa}</p>
                            </div>
                            <div>
                              <Badge className="bg-amber-100 text-amber-700 border-none">
                                {student.achievements[0]}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Top Performing Students</CardTitle>
                <CardDescription>Students with exceptional academic achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topStudents.map((student) => (
                    <div key={student.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold">{student.name}</h3>
                          <Badge className="bg-white text-indigo-700">
                            {student.avg}%
                          </Badge>
                        </div>
                        <p className="text-indigo-100">Grade {student.grade} · {student.school}</p>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <Award size={18} className="text-amber-500 mr-2" />
                          <span className="font-medium text-slate-700">Achievements</span>
                        </div>
                        <ul className="space-y-2">
                          {student.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Medal size={16} className="text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-slate-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                          <div className="flex items-center text-slate-500 text-sm">
                            <Bookmark size={14} className="mr-1" />
                            GPA: {student.gpa}
                          </div>
                          <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SuperStudentDashboard;