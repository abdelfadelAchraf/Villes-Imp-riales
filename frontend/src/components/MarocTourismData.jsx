import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Données touristiques du Maroc
const tourismData = {
  visitorsByYear: [
    { year: '2018', visitors: 12.3 },
    { year: '2019', visitors: 13.1 },
    { year: '2020', visitors: 4.2 },
    { year: '2021', visitors: 7.8 },
    { year: '2022', visitors: 11.3 },
    { year: '2023', visitors: 14.5 },
    { year: '2024', visitors: 16.2 },
  ],
  visitorsByRegion: [
    { region: 'Marrakech-Safi', visitors: 32 },
    { region: 'Casablanca-Settat', visitors: 21 },
    { region: 'Tanger-Tétouan-Al Hoceïma', visitors: 15 },
    { region: 'Fès-Meknès', visitors: 12 },
    { region: 'Rabat-Salé-Kénitra', visitors: 10 },
    { region: 'Souss-Massa', visitors: 8 },
    { region: 'Autres régions', visitors: 2 },
  ],
  tourismByActivity: [
    { name: 'Sites culturels', percentage: 40 },
    { name: 'Plages', percentage: 25 },
    { name: 'Montagnes', percentage: 15 },
    { name: 'Désert', percentage: 12 },
    { name: 'Gastronomie', percentage: 8 },
  ],
  seasonalityData: [
    { month: 'Jan', visitors: 0.8 },
    { month: 'Fév', visitors: 0.9 },
    { month: 'Mar', visitors: 1.1 },
    { month: 'Avr', visitors: 1.4 },
    { month: 'Mai', visitors: 1.3 },
    { month: 'Juin', visitors: 1.5 },
    { month: 'Juil', visitors: 2.1 },
    { month: 'Aoû', visitors: 2.3 },
    { month: 'Sep', visitors: 1.6 },
    { month: 'Oct', visitors: 1.2 },
    { month: 'Nov', visitors: 0.9 },
    { month: 'Déc', visitors: 1.1 },
  ],
};

// Couleurs personnalisées pour les graphiques avec le thème ambre
const chartColors = {
  primary: "#F59E0B",
  secondary: "#FBBF24",
  tertiary: "#FCD34D",
  quaternary: "#FDE68A",
  background: "#FFFBEB",
  text: "#92400E",
};

const CHARTS = {
  BAR: 'bar',
  PIE: 'pie',
  LINE: 'line',
  AREA: 'area',
};

const MarocTourismData = () => {
  const [activeChart, setActiveChart] = useState(CHARTS.BAR);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <text 
        x={x} 
        y={y} 
        fill={chartColors.text}
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {name} ({`${(percent * 100).toFixed(0)}%`})
      </text>
    );
  };

  return (
    <div className="bg-amber-50 rounded-lg p-6 border border-amber-100 mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Données Touristiques du Maroc</h2>
      
      {/* Boutons de sélection des graphiques */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveChart(CHARTS.BAR)}
          className={`px-4 py-2 rounded-md font-medium ${activeChart === CHARTS.BAR 
            ? 'bg-amber-600 text-white' 
            : 'bg-white text-amber-600 border border-amber-600 hover:bg-amber-100'}`}
        >
          Visiteurs par Région
        </button>
        <button 
          onClick={() => setActiveChart(CHARTS.PIE)}
          className={`px-4 py-2 rounded-md font-medium ${activeChart === CHARTS.PIE 
            ? 'bg-amber-600 text-white' 
            : 'bg-white text-amber-600 border border-amber-600 hover:bg-amber-100'}`}
        >
          Activités Touristiques
        </button>
        <button 
          onClick={() => setActiveChart(CHARTS.LINE)}
          className={`px-4 py-2 rounded-md font-medium ${activeChart === CHARTS.LINE 
            ? 'bg-amber-600 text-white' 
            : 'bg-white text-amber-600 border border-amber-600 hover:bg-amber-100'}`}
        >
          Évolution des Visiteurs
        </button>
        <button 
          onClick={() => setActiveChart(CHARTS.AREA)}
          className={`px-4 py-2 rounded-md font-medium ${activeChart === CHARTS.AREA 
            ? 'bg-amber-600 text-white' 
            : 'bg-white text-amber-600 border border-amber-600 hover:bg-amber-100'}`}
        >
          Saisonnalité
        </button>
      </div>
      
      {/* Container des graphiques */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-amber-100">
        {activeChart === CHARTS.BAR && (
          <div className="py-4">
            <h3 className="text-lg font-semibold text-center mb-4 text-amber-800">Répartition des Visiteurs par Région (%)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={tourismData.visitorsByRegion}
                margin={{ top: 5, right: 30, left: 20, bottom: 110 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis 
                  dataKey="region" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  tick={{ fill: chartColors.text, fontSize: 12 }}
                />
                <YAxis tick={{ fill: chartColors.text }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: chartColors.background, borderColor: chartColors.secondary }}
                  formatter={(value) => [`${value}%`, 'Visiteurs']}
                />
                <Bar dataKey="visitors" fill={chartColors.primary} radius={[4, 4, 0, 0]}>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeChart === CHARTS.PIE && (
          <div className="py-4">
            <h3 className="text-lg font-semibold text-center mb-4 text-amber-800">Répartition par Activité Touristique</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={tourismData.tourismByActivity}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {tourismData.tourismByActivity.map((entry, index) => (
                    <React.Fragment key={`cell-${index}`}>
                      <cell 
                        fill={
                          index === 0 ? chartColors.primary : 
                          index === 1 ? chartColors.secondary : 
                          index === 2 ? chartColors.tertiary : 
                          index === 3 ? chartColors.quaternary : 
                          '#FEF3C7'
                        } 
                      />
                    </React.Fragment>
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Pourcentage']}
                  contentStyle={{ backgroundColor: chartColors.background, borderColor: chartColors.secondary }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeChart === CHARTS.LINE && (
          <div className="py-4">
            <h3 className="text-lg font-semibold text-center mb-4 text-amber-800">Évolution du Nombre de Visiteurs (en millions)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={tourismData.visitorsByYear}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="year" tick={{ fill: chartColors.text }} />
                <YAxis tick={{ fill: chartColors.text }} />
                <Tooltip 
                  formatter={(value) => [`${value} millions`, 'Visiteurs']}
                  contentStyle={{ backgroundColor: chartColors.background, borderColor: chartColors.secondary }}
                />
                <Legend wrapperStyle={{ color: chartColors.text }} />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke={chartColors.primary} 
                  strokeWidth={3}
                  dot={{ fill: chartColors.primary, stroke: chartColors.primary, strokeWidth: 2, r: 5 }}
                  activeDot={{ fill: chartColors.text, stroke: chartColors.primary, strokeWidth: 2, r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeChart === CHARTS.AREA && (
          <div className="py-4">
            <h3 className="text-lg font-semibold text-center mb-4 text-amber-800">Saisonnalité du Tourisme (en millions de visiteurs)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={tourismData.seasonalityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" tick={{ fill: chartColors.text }} />
                <YAxis tick={{ fill: chartColors.text }} />
                <Tooltip 
                  formatter={(value) => [`${value} millions`, 'Visiteurs']}
                  contentStyle={{ backgroundColor: chartColors.background, borderColor: chartColors.secondary }}
                />
                <Area 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke={chartColors.primary} 
                  fill={chartColors.quaternary} 
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-600 text-center italic">
          * Données à titre illustratif pour présentation touristique du Maroc
        </div>
      </div>
    </div>
  );
};

export default MarocTourismData;