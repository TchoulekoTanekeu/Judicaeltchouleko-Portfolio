import React, { useState } from 'react';
import { Flame, Sliders, Activity, Beaker, HelpCircle, ArrowRight, Check } from 'lucide-react';

export const MetallurgyLabCalculator: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'flotation' | 'slag' | 'ellingham'>('flotation');

  // Flotation Tool State
  const [feedGrade, setFeedGrade] = useState<number>(1.2); // % Cu
  const [massPull, setMassPull] = useState<number>(6.5); // % of total ore to conc
  const [collectorDose, setCollectorDose] = useState<number>(45); // g/tonne
  const [residenceTime, setResidenceTime] = useState<number>(12); // minutes

  // Calculated flotation values
  // Kinetic recovery formula: R = R_max * (1 - exp(-k * t))
  const kRate = 0.12 * (collectorDose / 40);
  const maxR = Math.min(96.5, 78 + (massPull * 2.6));
  const calcRecovery = Math.min(98.5, maxR * (1 - Math.exp(-kRate * (residenceTime / 2))));
  const concGrade = (feedGrade * (calcRecovery / 100)) / (massPull / 100);
  const tailGrade = Math.max(0.02, (feedGrade * (100 - massPull) - (concGrade * massPull)) / (100 - massPull));
  const enrichmentRatio = concGrade / feedGrade;

  // Slag Basicity State
  const [cao, setCao] = useState<number>(42);
  const [sio2, setSio2] = useState<number>(34);
  const [al2o3, setAl2o3] = useState<number>(12);
  const [mgo, setMgo] = useState<number>(8);

  const b2Ratio = (cao / (sio2 || 1));
  const b4Ratio = ((cao + mgo) / ((sio2 + al2o3) || 1));
  const estViscosity = Math.max(0.4, (2.8 - (b4Ratio * 1.1))).toFixed(2);
  const tappingStatus = b4Ratio >= 1.05 && b4Ratio <= 1.35 
    ? 'Optimal Smelting Fluidity (Low Refractory Wear)' 
    : b4Ratio < 1.05 
    ? 'Acidic Slag (High Viscosity, High Metal Entrainment)' 
    : 'Hyper-Basic Slag (High Liquidus Temp, Crust Formation)';

  // Ellingham Diagram State
  const [temperature, setTemperature] = useState<number>(1150); // Celsius
  const [selectedReaction, setSelectedReaction] = useState<string>('Cu');

  const reactionsData: Record<string, { name: string; dH: number; dS: number; unit: string }> = {
    Cu: { name: '2Cu + O₂ ⇌ 2CuO (Copper Oxidation)', dH: -314, dS: -0.178, unit: 'kJ/mol O₂' },
    Fe: { name: '2Fe + O₂ ⇌ 2FeO (Wüstite Formation)', dH: -530, dS: -0.134, unit: 'kJ/mol O₂' },
    C_CO: { name: '2C + O₂ ⇌ 2CO (Boudouard Reduction)', dH: -221, dS: 0.179, unit: 'kJ/mol O₂' },
    Si: { name: 'Si + O₂ ⇌ SiO₂ (Silica Slagging)', dH: -911, dS: -0.182, unit: 'kJ/mol O₂' },
    Al: { name: '4/3Al + O₂ ⇌ 2/3Al₂O₃ (Alumina)', dH: -1117, dS: -0.210, unit: 'kJ/mol O₂' },
  };

  const rxn = reactionsData[selectedReaction];
  const tempK = temperature + 273.15;
  // ΔG° = ΔH° - TΔS° (in kJ/mol O2)
  const deltaG = (rxn.dH - (tempK * rxn.dS)).toFixed(1);
  const logPO2 = (parseFloat(deltaG) * 1000 / (2.303 * 8.314 * tempK)).toFixed(1);

  return (
    <section id="metallurgy-lab" className="py-20 bg-zinc-900/60 border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-sm border border-amber-400/20">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Engineering Workbench</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Metallurgy & Mineral Processing Lab
          </h2>
          <p className="text-sm text-zinc-400 font-sans">
            Demonstrating thermodynamic computation, kinetic mass balancing, and mining AI computational modeling. Recalculates physical process outputs live in the browser.
          </p>

          {/* Tool Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTool('flotation')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all ${
                activeTool === 'flotation'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              <Beaker className="w-4 h-4" />
              <span>Froth Flotation Yield Simulator</span>
            </button>
            <button
              onClick={() => setActiveTool('slag')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all ${
                activeTool === 'slag'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Smelting Slag Basicity Index</span>
            </button>
            <button
              onClick={() => setActiveTool('ellingham')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all ${
                activeTool === 'ellingham'
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Ellingham Reaction Free Energy (ΔG°)</span>
            </button>
          </div>
        </div>

        {/* Workbench Container */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl">
          {/* Tool 1: Froth Flotation */}
          {activeTool === 'flotation' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Input Parameters */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="border-b border-zinc-800 pb-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400">
                      Circuit Process Setpoints
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Adjust ore feed grade, mass pull to concentrate, and chemical residence.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between text-zinc-300 mb-1.5">
                        <span className="font-medium">Ore Feed Grade (% Cu):</span>
                        <span className="font-mono text-amber-400 font-semibold">{feedGrade.toFixed(2)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.3"
                        max="5.0"
                        step="0.1"
                        value={feedGrade}
                        onChange={(e) => setFeedGrade(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-300 mb-1.5">
                        <span className="font-medium">Concentrate Mass Pull (% of Feed):</span>
                        <span className="font-mono text-amber-400 font-semibold">{massPull.toFixed(1)}%</span>
                      </div>
                      <input
                        type="range"
                        min="2.0"
                        max="15.0"
                        step="0.5"
                        value={massPull}
                        onChange={(e) => setMassPull(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-300 mb-1.5">
                        <span className="font-medium">Collector Reagent Dosage (PAX g/t):</span>
                        <span className="font-mono text-amber-400 font-semibold">{collectorDose} g/t</span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="90"
                        step="5"
                        value={collectorDose}
                        onChange={(e) => setCollectorDose(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-300 mb-1.5">
                        <span className="font-medium">Flotation Residence Time (min):</span>
                        <span className="font-mono text-amber-400 font-semibold">{residenceTime} min</span>
                      </div>
                      <input
                        type="range"
                        min="4"
                        max="24"
                        step="1"
                        value={residenceTime}
                        onChange={(e) => setResidenceTime(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Output Displays & SVG Yield Curve */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="border-b border-zinc-800 pb-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
                      Calculated Metallurgical Balance
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Computed in real-time using continuous first-order flotation kinetics.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                      <div className="text-xs text-zinc-400">Metal Recovery Rate</div>
                      <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums mt-1">
                        {calcRecovery.toFixed(1)}%
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Target: &gt; 88.0%</div>
                    </div>

                    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                      <div className="text-xs text-zinc-400">Concentrate Grade</div>
                      <div className="text-2xl font-bold font-mono text-zinc-100 tabular-nums mt-1">
                        {concGrade.toFixed(2)}% Cu
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Smelter spec: &gt; 24.0%</div>
                    </div>

                    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                      <div className="text-xs text-zinc-400">Tailings Discard Grade</div>
                      <div className="text-xl font-bold font-mono text-zinc-300 tabular-nums mt-1">
                        {tailGrade.toFixed(3)}% Cu
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Loss to tailings</div>
                    </div>

                    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                      <div className="text-xs text-zinc-400">Enrichment Ratio</div>
                      <div className="text-xl font-bold font-mono text-amber-400 tabular-nums mt-1">
                        {enrichmentRatio.toFixed(1)}x
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Grade multiplier</div>
                    </div>
                  </div>

                  {/* SVG Kinetic Recovery Curve */}
                  <div className="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded-lg">
                    <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400 mb-2">
                      <span>KINETIC RECOVERY TRAJECTORY vs TIME</span>
                      <span className="text-amber-400">t = {residenceTime}m</span>
                    </div>
                    <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80">
                      {/* Grid lines */}
                      <line x1="20" y1="10" x2="290" y2="10" stroke="#27272a" strokeDasharray="3 3" />
                      <line x1="20" y1="40" x2="290" y2="40" stroke="#27272a" strokeDasharray="3 3" />
                      <line x1="20" y1="70" x2="290" y2="70" stroke="#3f3f46" />
                      <line x1="20" y1="10" x2="20" y2="70" stroke="#3f3f46" />

                      {/* Curve Path */}
                      <path
                        d={`M 20 70 Q 100 ${70 - (calcRecovery * 0.55)}, 290 ${70 - (calcRecovery * 0.62)}`}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                      />
                      {/* Active point */}
                      <circle
                        cx={20 + (residenceTime / 24) * 260}
                        cy={70 - (calcRecovery * 0.6)}
                        r="4"
                        fill="#fbbf24"
                        stroke="#09090b"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tool 2: Slag Basicity */}
          {activeTool === 'slag' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400">
                  Pyrometallurgical Slag Chemistry & Viscosity
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Evaluate slag basicity ratio (B2 & B4), silica network polymerization, and blast furnace tapping fluidity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Calcium Oxide (CaO %):</span>
                      <span className="font-mono text-amber-400">{cao}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="60"
                      value={cao}
                      onChange={(e) => setCao(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Silicon Dioxide (SiO₂ %):</span>
                      <span className="font-mono text-amber-400">{sio2}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="55"
                      value={sio2}
                      onChange={(e) => setSio2(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Alumina (Al₂O₃ %):</span>
                      <span className="font-mono text-amber-400">{al2o3}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      value={al2o3}
                      onChange={(e) => setAl2o3(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Magnesium Oxide (MgO %):</span>
                      <span className="font-mono text-amber-400">{mgo}%</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="18"
                      value={mgo}
                      onChange={(e) => setMgo(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-400 font-mono">B2 Basicity (CaO / SiO₂)</span>
                      <span className="text-xl font-bold font-mono text-zinc-100">{b2Ratio.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-400 font-mono">B4 Basicity ((CaO+MgO) / (SiO₂+Al₂O₃))</span>
                      <span className="text-xl font-bold font-mono text-amber-400">{b4Ratio.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-400 font-mono">Estimated Viscosity at 1450°C</span>
                      <span className="text-xl font-bold font-mono text-zinc-100">{estViscosity} Poise</span>
                    </div>
                  </div>

                  <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg">
                    <div className="text-xs font-mono uppercase text-zinc-400">Furnace Tapping Assessment</div>
                    <p className="text-xs text-amber-400 mt-1 font-medium">{tappingStatus}</p>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Maintains optimal sulfur partition ratio while guarding refractory brick against acid erosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tool 3: Ellingham Diagram */}
          {activeTool === 'ellingham' && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400">
                  Ellingham Thermodynamic Oxidation / Reduction Free Energy
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Calculate standard Gibbs free energy of oxide formation (ΔG°) and equilibrium oxygen partial pressure at smelting temperatures.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-2">
                      SELECT METALLURGICAL REACTION COUPLE:
                    </label>
                    <div className="space-y-1.5">
                      {Object.entries(reactionsData).map(([key, data]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedReaction(key)}
                          className={`w-full text-left px-3.5 py-2 text-xs rounded border transition-colors ${
                            selectedReaction === key
                              ? 'bg-amber-400/20 border-amber-400 text-white font-semibold'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                          }`}
                        >
                          {data.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-zinc-300 mb-1">
                      <span>Reaction Temperature:</span>
                      <span className="font-mono text-amber-400 font-semibold">{temperature}°C ({tempK.toFixed(0)} K)</span>
                    </div>
                    <input
                      type="range"
                      min="400"
                      max="1800"
                      step="25"
                      value={temperature}
                      onChange={(e) => setTemperature(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-lg space-y-4">
                    <div>
                      <span className="text-xs text-zinc-400 font-mono">STANDARD GIBBS FREE ENERGY (ΔG°)</span>
                      <div className="text-3xl font-bold font-mono text-amber-400 tabular-nums mt-1">
                        {deltaG} {rxn.unit}
                      </div>
                      <div className="text-xs text-zinc-400 mt-1">
                        {parseFloat(deltaG) < 0 ? 'Spontaneous oxide formation (Reaction proceeds forward)' : 'Oxide becomes unstable (Thermal dissociation possible)'}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800">
                      <span className="text-xs text-zinc-400 font-mono">LOG OXYGEN PARTIAL PRESSURE (log pO₂)</span>
                      <div className="text-2xl font-bold font-mono text-zinc-100 tabular-nums mt-1">
                        10^{logPO2} atm
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1">
                        Any gas mixture with pO₂ lower than this value will reduce the oxide back to metallic state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
