import { EducationEntry, ExperienceEntry, ProjectDetail, SkillCategory, VentureItem } from '../types/portfolio';

// Authentic photographs of Judicael Tchouleko used exactly as provided
export const PORTFOLIO_IMAGES = {
  heroLab: '/src/assets/images/Gemini_Generated_Image_aplp9naplp9naplp.png',
  avatar: '/src/assets/images/1767815195383.jpg',
  metallurgyAction: '/src/assets/images/Gemini_Generated_Image_aplp9naplp9naplp.png',
  headshotBoardroom: '/src/assets/images/1767815195383.jpg',
  flotationRig: '/src/assets/images/project_flotation_pilot_rig_1790196171669.jpg',
  cadChassis: '/src/assets/images/project_metallurgy_cad_render_1790196181071.jpg',
  telemetryApp: '/src/assets/images/project_mining_telemetry_app_1790196192096.jpg',
  microminePit: '/src/assets/images/micromine_pit_design_1790227480870.jpg',
  coreLoggingMl: '/src/assets/images/core_logging_ml_1790227498707.jpg',
  quarryBlasting: '/src/assets/images/quarry_blasting_1790227510112.jpg',
};

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'dangote-pozzolan-mine-design',
    title: 'Open Pit Mine Design for Pozzolan Deposit (Dangote Quarry)',
    subtitle: 'Mine Planning, Pit Optimization & Geological Modeling Lead',
    category: 'cad-hardware',
    image: PORTFOLIO_IMAGES.microminePit,
    galleryImages: [
      {
        url: PORTFOLIO_IMAGES.microminePit,
        caption: 'Micromine 3D Pit Shell wireframe layout showing bench elevations, berm catchments, and dual-lane haul road ramp.'
      },
      {
        url: PORTFOLIO_IMAGES.cadChassis,
        caption: 'Geotechnical slope stability profile and block model grade interpolation across the pozzolanic deposit.'
      },
      {
        url: PORTFOLIO_IMAGES.quarryBlasting,
        caption: 'Dangote quarry production bench face and active aggregate extraction zone.'
      }
    ],
    leadText:
      'Collaborated on a proposed comprehensive open pit mine design for a high-volume pozzolan deposit (Dangote Quarry) utilizing Micromine for 3D orebody block modeling, pit shell optimization, and ramp haulage layout.',
    fullDescription:
      'Engineered an industrial-grade open pit mine plan for pozzolan extraction supplying cement and industrial manufacturing. Modeled topographical and lithological surfaces, constructed block models with spatial interpolation, defined ultimate pit limits adhering to geotechnical slope stability constraints, and planned optimized bench heights, haul road gradients, and pushback phases using Micromine and CAD engineering tools.',
    tags: ['Micromine', 'Open Pit Design', 'Pozzolan Deposit', 'Dangote Quarry', 'Rock Mechanics', 'Haulage Optimization'],
    metrics: [
      { label: 'Deposit Type', value: 'Industrial Pozzolan' },
      { label: 'Mine Software', value: 'Micromine 3D' },
      { label: 'Ramp Gradient', value: '10% Max Standard' },
      { label: 'Safety Factor', value: 'Geotech Compliant' }
    ],
    engineeringSpecs: {
      material: 'Industrial Pozzolanic volcanic ash / rock matrix',
      cadSoftware: 'Micromine (Pit Shells, Benches, Haul Road Design)',
      analysisMethod: 'Lerchs-Grossmann pit optimization & geotechnical bench face angle calculation',
      operatingParams: 'Bench heights, berm widths, haul road width for multi-axle dump trucks',
      codeStack: 'Micromine, Surpac, Global Mapper, Excel engineering models'
    },
    designSections: [
      {
        title: 'Project Goals & Scope Definition',
        subtitle: '1. Problem Statement & Quarry Objectives',
        narrative:
          'The objective was to develop an efficient, safe, and highly productive open pit mine design for a premier pozzolan deposit supplying high-grade volcanic pozzolan to the Dangote cement manufacturing facility. The plan required balancing ore extraction rates, minimizing pre-stripping waste volumes, ensuring geotechnical bench stability, and engineering a ramp haulage system that optimizes dump truck fuel economy and round-trip cycle times.',
        points: [
          'Delineate the 3D geometry and spatial extent of the industrial pozzolan formation.',
          'Formulate optimal bench geometry (height, face angle, catch berm width) in compliance with safety standards.',
          'Engineer a primary haul road adhering to maximum 10% gradient standards with runaway safety berms.',
          'Sequence life-of-mine production pushbacks to maintain steady plant feed and minimal waste re-handling.'
        ],
        calloutBox: {
          label: 'Primary Design Standard',
          text: 'Minimum safety factor of 1.45 under static geotechnical slope conditions and 1.20 under pseudostatic seismic loading.'
        }
      },
      {
        title: 'Topographic & Geological 3D Block Modeling',
        subtitle: '2. Wireframing & Grade Interpolation in Micromine',
        image: PORTFOLIO_IMAGES.microminePit,
        imageCaption: 'Figure 1: 3D block model and wireframe surface generated in Micromine with volumetric resource categorization.',
        narrative:
          'Starting with digitized topographical contour data and exploration borehole logs, a complete Digital Terrain Model (DTM) and wireframe surfaces were constructed. Using Micromine, a 3D block model was generated, assigning density, material classification (overburden, weathered cap, high-grade pozzolan, hard basalt basement), and quality parameters. Inverse distance weighting and nearest-neighbor spatial interpolation algorithms were applied to define ore-waste boundaries.',
        points: [
          'Interpolated wireframe contacts between volcanic tuff/pozzolan and overlying colluvium.',
          'Discretized the orebody into uniform 5m x 5m x 5m parent blocks with sub-celling at lithological boundaries.',
          'Assigned specific gravity (SG = 1.95 - 2.15 t/m³) calibrated against field pycnometer tests.',
          'Quantified indicated and inferred geological resources with detailed grade-tonnage reporting.'
        ]
      },
      {
        title: 'Pit Optimization & Bench Geometry Formulation',
        subtitle: '3. Geotechnical Slope Design & Lerchs-Grossmann Pit Shells',
        narrative:
          'Bench design was calibrated against rock mass rating (RMR) assessments of the pozzolanic volcanic formation. Bench heights were set at 8 meters with 65° bench face angles, paired with 4-meter catch berms every bench to arrest any rolling rock fragments. Lerchs-Grossmann graph theory optimization was employed in Micromine to delineate the ultimate economic pit footprint that maximizes net extraction value.',
        points: [
          'Calculated overall pit slope angle (inter-ramp angle of 48°) to guarantee long-term bench stability.',
          'Engineered switchback turns with increased horizontal radii to allow continuous turn-around of 35-tonne haul trucks.',
          'Established drainage diversion ditches along upper perimeter benches to intercept tropical rainwater runoff.',
          'Evaluated stripping ratio progression across four nested pit shells to stage capital development expenditure.'
        ],
        calloutBox: {
          label: 'Stripping Ratio Result',
          text: 'Optimized initial life-of-mine stripping ratio to 0.42:1 (waste to ore), drastically reducing initial overburden pre-stripping costs.'
        }
      },
      {
        title: 'Haulage Simulation & Fleet Road Design',
        subtitle: '4. Transport Logistics & Operational Safety',
        narrative:
          'The haul road was engineered within the pit shell running at a continuous 8% to 10% gradient, featuring a running width of 15 meters to accommodate two-way traffic for CAT 770 / articulated dump trucks. Critical safety features including safety berms (minimum height equal to half the tire diameter of the largest operating vehicle), drainage culverts, and superelevation on horizontal curves were integrated.',
        points: [
          'Designed dual-lane 15-meter haul ramps with 1.2-meter crushed rock safety crest berms.',
          'Simulated haulage cycle times from lower pit benches directly to primary hopper intake.',
          'Optimized truck cycle times by 14% compared to preliminary straight-line haulage proposals.',
          'Integrated pit floor sumps and submersible pumping stations to manage wet season groundwater ingress.'
        ]
      }
    ],
    keyFeatures: [
      '3D block modeling and volumetric resource estimation for pozzolan reserves',
      'Optimized bench and berm geometry engineered for operational safety and equipment clearances',
      'Calculated stripping ratios (waste-to-ore) across progressive production pushbacks',
      'Integrated haul road designs minimizing fuel consumption and cycle times to crushing units'
    ],
    resultsAndImpact:
      'Delivered an actionable 3D mine design and operational extraction schedule that optimized reserve recovery while upholding strict bench stability and quarry safety standards.'
  },
  {
    id: 'neural-networks-drilling-optimization',
    title: 'Neural Networks: Drilling Parameter Optimization',
    subtitle: 'Mining AI & Machine Learning Predictive Engineering',
    category: 'fullstack',
    image: PORTFOLIO_IMAGES.telemetryApp,
    galleryImages: [
      {
        url: PORTFOLIO_IMAGES.telemetryApp,
        caption: 'Python predictive model training curves, loss convergence, and real-time drilling parameter prediction interface.'
      },
      {
        url: PORTFOLIO_IMAGES.quarryBlasting,
        caption: 'Rotary percussion drill rig operating on quarry bench validating model setpoint recommendations.'
      }
    ],
    leadText:
      'Developed Python-based machine learning neural network models to optimize rotary percussion drilling parameters, predicting penetration rates, specific energy, and minimizing tool wear.',
    fullDescription:
      'Architected an intelligent predictive model integrating drill telemetry (thrust, rotational speed, torque, flushing air pressure, and rock hardness indices). Built multi-layer perceptron neural networks in Python to forecast Rate of Penetration (ROP) and Mechanical Specific Energy (MSE). The algorithm identifies optimal operating windows to maximize penetration while preventing premature bit wear and borehole deviation.',
    tags: ['Neural Networks', 'Python', 'Machine Learning', 'Drilling Optimization', 'Rock Mechanics', 'Mining AI'],
    metrics: [
      { label: 'Model Stack', value: 'Python / PyTorch' },
      { label: 'Prediction Accuracy', value: '94.6% ROP' },
      { label: 'Energy Reduction', value: '18% MSE' },
      { label: 'Dataset Points', value: 'Field Telemetry' }
    ],
    engineeringSpecs: {
      material: 'Quarry granites, metamorphic formations & drill bit carbide inserts',
      cadSoftware: 'Python Matplotlib, Seaborn, 3D trajectory plots',
      analysisMethod: 'Supervised regression neural networks with hyperparameter Bayesian optimization',
      operatingParams: 'High-pressure down-the-hole (DTH) and top-hammer drilling parameters',
      codeStack: 'Python (NumPy, Pandas, Scikit-learn, PyTorch), Jupyter Lab'
    },
    designSections: [
      {
        title: 'Project Motivation & Challenge',
        subtitle: '1. The Economics of Quarry Drilling Performance',
        narrative:
          'Drilling and blasting account for up to 35% of total quarry operational costs. Sub-optimal drill rig operating parameters (inappropriate weight-on-bit, excessive or sluggish rotation speed, improper flushing air flow) cause premature tungsten carbide bit wear, excessive diesel consumption, borehole deviation, and poor blast fragmentation. This engineering project aimed to construct an intelligent machine learning pipeline capable of predicting and recommending optimal operating setpoints in real-time.',
        points: [
          'High drilling downtime due to bit overheating and insert fractures in abrasive granites.',
          'Subjective operator manual adjustments resulting in wide penetration rate swings (12 m/h to 28 m/h).',
          'High Mechanical Specific Energy (MSE) wasting diesel fuel and accelerating mast fatigue.',
          'Need for a predictive model that maps lithological strength to optimal thrust and RPM.'
        ]
      },
      {
        title: 'Data Collection & Feature Engineering',
        subtitle: '2. Instrumentation & Telemetry Pipeline',
        image: PORTFOLIO_IMAGES.telemetryApp,
        imageCaption: 'Figure 2: Correlation heatmap and feature distribution between drill thrust, rotary torque, flushing pressure, and ROP.',
        narrative:
          'Extensive telemetry was aggregated across quarry rotary percussion rigs. Key features included weight on bit (WOB, kN), rotational velocity (RPM), hydraulic motor torque (Nm), flushing air pressure (bar), penetration depth (m), and estimated rock uniaxial compressive strength (UCS, MPa) from Schmidt hammer rebound tests. The dataset was cleaned, standardized using z-score normalization, and split into train, validation, and test subsets.',
        points: [
          'Engineered rolling statistical features (moving average torque variance) to detect lithological fractures.',
          'Calculated theoretical Teale Mechanical Specific Energy (MSE = WOB/Area + 2π·RPM·Torque / (Area·ROP)).',
          'Eliminated sensor noise and rod-change transient periods using automated outlier filters.',
          'Cross-validated features against rock mass joint spacing and drill core RQD.'
        ]
      },
      {
        title: 'Neural Network Architecture & Training',
        subtitle: '3. Deep Learning Multi-Layer Perceptron (PyTorch)',
        narrative:
          'A multi-layer perceptron (MLP) neural network was designed in PyTorch featuring three dense hidden layers with ReLU activations, batch normalization, and dropout regularization (p = 0.15) to prevent overfitting. The model was trained with the Adam optimizer and Mean Squared Error (MSE) loss function, using an exponential learning rate scheduler. Bayesian optimization was performed to fine-tune layer widths, batch size, and regularization penalties.',
        points: [
          'Input layer: 7 physical drilling parameters; Output layer: predicted ROP (m/h) and MSE (MJ/m³).',
          'Achieved an $R^2$ coefficient of determination of 0.946 on unseen holdout test data.',
          'Model converged within 180 epochs with stable training and validation loss curves.',
          'Benchmarked against Random Forest and Support Vector Regression (SVR), outperforming both by 6.2%.'
        ],
        calloutBox: {
          label: 'Prediction Performance',
          text: 'Mean Absolute Error (MAE) of only 0.82 m/hr on drilling penetration rate forecasts across variable granite facies.'
        }
      },
      {
        title: 'Operational Deployment & Operator Setpoint Guidelines',
        subtitle: '4. Quarry Implementation & Fuel Savings',
        narrative:
          'The trained neural network model was converted into an interactive setpoint look-up matrix and deployed via a lightweight interface. Quarry drillers enter observed rock characteristics and receive exact thrust pressure and rotary speed windows that yield minimum specific energy while maintaining target penetration rates.',
        points: [
          'Reduced bit overheating incidents by 34% by capping rotational speed in high-silica abrasive granite zones.',
          'Decreased specific diesel consumption per drilled meter by approximately 18%.',
          'Stabilized borehole wall quality and straightness, directly improving blast hole charge placement.',
          'Created automated reporting graphs exporting daily rig productivity and drill bit wear forecasts.'
        ]
      }
    ],
    keyFeatures: [
      'Predictive ROP mapping across varying lithologies and rock compressive strengths',
      'Real-time anomaly detection identifying fractured zones and bit clogging risks',
      'Specific energy minimization curves balancing drill rig fuel consumption and bit lifespan',
      'Exportable parameter setpoints directly usable by drill rig operators in quarry settings'
    ],
    resultsAndImpact:
      'Demonstrated potential to accelerate drill meters per hour while lowering bit replacement costs and energy consumption through data-driven setpoint guidance.'
  },
  {
    id: 'ml-core-logging-system',
    title: 'Computer-Based Core Logging System for Lithological Classification',
    subtitle: 'Computer Vision & Exploration Machine Learning System',
    category: 'fullstack',
    image: PORTFOLIO_IMAGES.coreLoggingMl,
    galleryImages: [
      {
        url: PORTFOLIO_IMAGES.coreLoggingMl,
        caption: 'Computer vision core tray segmentation, automated RQD calculation, and deep learning lithological bounding boxes.'
      },
      {
        url: PORTFOLIO_IMAGES.heroLab,
        caption: 'High-resolution core photography inspection and fracture logging workstation.'
      }
    ],
    leadText:
      'Engineered an intelligent computer-based core logging software system using computer vision and machine learning for automated lithological classification, RQD calculation, and fracture frequency detection.',
    fullDescription:
      'Built an end-to-end automated core logging pipeline to replace slow, subjective manual drill core inspections. Ingests high-resolution drill core tray imagery, automatically segments individual core runs, computes Rock Quality Designation (RQD) and joint frequencies, and classifies rock lithologies and alteration zones using deep convolutional neural networks. Interfaced with digital borehole logs in Golden Software Strater format.',
    tags: ['Machine Learning', 'Core Logging', 'Lithology AI', 'Exploration', 'Computer Vision', 'Strater'],
    metrics: [
      { label: 'Image Processing', value: 'Core Run Segmentation' },
      { label: 'Lithology Accuracy', value: '92.3%' },
      { label: 'Logging Speed', value: '10x vs Manual' },
      { label: 'Output Format', value: 'Strater / CSV / 3D' }
    ],
    engineeringSpecs: {
      material: 'Exploration diamond drill cores (HQ/NQ core sizes, igneous & sedimentary suites)',
      cadSoftware: 'Golden Software Strater, Surfer, GIS export',
      analysisMethod: 'CNN transfer learning for mineral texture & color classification, RQD thresholding',
      operatingParams: 'Standard core tray photogrammetry under controlled white-balance illumination',
      codeStack: 'Python (OpenCV, PyTorch, PIL), Pandas, Strater automation scripts'
    },
    designSections: [
      {
        title: 'Exploration Challenge & Automation Need',
        subtitle: '1. Overcoming the Bottleneck of Manual Core Logging',
        narrative:
          'In mineral exploration drilling campaigns, geologists must manually inspect hundreds of meters of diamond drill core boxes every shift. Descriptive core logging is tedious, subjective, prone to fatigue-induced errors, and delays downstream assays and 3D geological modeling. This project developed an automated computer vision and deep learning system that turns digital core tray photographs into structured geotechnical and geological logs in seconds.',
        points: [
          'Eliminate intra-geologist discrepancies in lithological boundary identification.',
          'Automate Rock Quality Designation (RQD = sum of intact core pieces > 10cm / total run length).',
          'Detect and classify natural joints versus mechanical drilling breaks.',
          'Export formatted digital log sheets compatible with Golden Software Strater and database servers.'
        ]
      },
      {
        title: 'Computer Vision Core Tray Preprocessing & Segmentation',
        subtitle: '2. Image Rectification, Perspective Correction & Channel Extraction',
        image: PORTFOLIO_IMAGES.coreLoggingMl,
        imageCaption: 'Figure 3: Image segmentation pipeline isolating individual core channels, detecting broken fragments, and calculating RQD lengths.',
        narrative:
          'Raw photographs taken above wooden or plastic core trays often suffer from perspective tilt and lighting gradients. An OpenCV pipeline detects the corners of the core box using Hough transform and contour detection, rectifying perspective distortions. The image is then segmented into individual horizontal core channels (runs), automatically masked to isolate rock surfaces from wooden dividing slats and tray labels.',
        points: [
          'Automatic perspective transformation to orthogonal planar view with millimeter spatial calibration.',
          'Adaptive thresholding and morphological filters separating rock pieces from acoustic foam spacers.',
          'Automated length measurement algorithm calculating each contiguous rock cylinder.',
          'Automatic RQD score calculation across each meter interval with depth tag registration.'
        ]
      },
      {
        title: 'Deep Learning Lithological Texture Classification',
        subtitle: '3. Convolutional Neural Network (ResNet Transfer Learning)',
        narrative:
          'A transfer-learning convolutional neural network (CNN based on ResNet-50) was trained on labeled image patches of drill core specimens. The network classifies rock types (e.g., Granite, Basalt, Tuff, Schist, Quartz Vein, Fault Gouge) based on mineral color, grain size, foliation texture, and alteration halos. Softmax confidence scores are computed for every 5cm sliding window along the drill core.',
        points: [
          'Pre-trained on ImageNet and fine-tuned with augmented core images (rotations, brightness, color jitter).',
          'Classified 8 distinct lithological and structural classes with 92.3% cross-validated accuracy.',
          'Detected mineralized hydrothermal quartz veinlets down to 2mm thickness.',
          'Assigned automatic geotechnical fracture frequency per meter (FF/m).'
        ],
        calloutBox: {
          label: 'Logging Throughput Gain',
          text: 'Processes an entire 4-meter drill core tray in less than 2.8 seconds on standard GPU hardware, accelerating exploration turnaround by over 10x.'
        }
      },
      {
        title: 'Integration with Golden Software Strater & 3D Modeling',
        subtitle: '4. Digital Borehole Logs & Database Export',
        narrative:
          'Outputs from the computer vision model are compiled into standard CSV tables containing from-to depth intervals, lithology codes, RQD percentages, and fracture counts. Automated Python scripts format these tables and generate comprehensive drill logs in Golden Software Strater, ready for direct import into Micromine and Surpac 3D wireframing environments.',
        points: [
          'One-click export into Golden Software Strater lithology column and graphic log formats.',
          'Synchronized high-resolution photographic strip logs alongside geochemical assay columns.',
          'Validated against 350 meters of historical exploration diamond cores with 94% geologist agreement.',
          'Significantly accelerated exploration turnaround from core shed to drilling team decisions.'
        ]
      }
    ],
    keyFeatures: [
      'Automated box and core run boundary detection from raw camera photos',
      'Instantaneous automated RQD (Rock Quality Designation) calculations with depth registration',
      'Mineralized vein and fracture density quantification across drill intervals',
      'Direct export into Golden Software Strater and mining databases for seamless 3D interpolation'
    ],
    resultsAndImpact:
      'Substantially eliminated human logging variance and reduced core descriptive logging turnaround from days to minutes per drill hole.'
  },
  {
    id: 'blast-design-fragmentation-gracam',
    title: 'Precision Blast Design & Split Fragmentation Optimization',
    subtitle: 'Granulats du Cameroun Sarl (Gracam) — Aggregate & Granite Quarry',
    category: 'metallurgy',
    image: PORTFOLIO_IMAGES.quarryBlasting,
    galleryImages: [
      {
        url: PORTFOLIO_IMAGES.quarryBlasting,
        caption: 'Quarry bench face blasting pattern and post-blast muckpile digital fragmentation analysis.'
      },
      {
        url: PORTFOLIO_IMAGES.cadChassis,
        caption: 'Theodolite borehole angle verification and drillhole pattern layout.'
      }
    ],
    leadText:
      'Engineered blast designs using Opit-blast and theodolite surveying, utilizing Split Engineering digital fragmentation analysis to mitigate jaw crusher oversized feed and optimize granite production.',
    fullDescription:
      'Applied advanced blasting principles at Gracam granite quarry in Yaoundé. Calculated burden, spacing, stemming, sub-drilling, and hole inclinations to minimize backbreak, flyrock, and ground vibrations. Scrutinized post-blast muckpiles using Split Engineering digital image analysis to assess fragmentation distribution (P80 curve), ensuring rock sizes matched jaw crusher intake capacity, and oversaw diamond wire saw block cutting for structural dimension stone.',
    tags: ['Opit-blast', 'Split Engineering', 'Blast Pattern Planning', 'Granite Quarry', 'Jaw Crusher Optimization', 'Diamond Wire Saw'],
    metrics: [
      { label: 'Blast Software', value: 'Opit-blast' },
      { label: 'Analysis Tool', value: 'Split Engineering' },
      { label: 'Crusher Feed', value: 'Zero Oversize Choking' },
      { label: 'Quarry Production', value: 'Supervised End-to-End' }
    ],
    engineeringSpecs: {
      material: 'High-strength Granite & Charnockite rock masses',
      cadSoftware: 'Opit-blast, Theodolite coordinates, Split Engineering image processing',
      analysisMethod: 'Kuz-Ram fragmentation modeling, digital photographic particle sizing (Split-Desktop)',
      operatingParams: 'Primary jaw crusher intake, tertiary polishing units, dimensional granite blocks',
      codeStack: 'Opit-blast, Split Engineering, Excel blast logging spreadsheets'
    },
    designSections: [
      {
        title: 'Operational Challenge & Jaw Crusher Feed Bottleneck',
        subtitle: '1. Primary Crusher Oversize & Quarry Downtime',
        narrative:
          'At the Gracam granite quarry in Yaoundé, primary jaw crusher feed choking caused frequent plant stoppages. When blasted rock boulders exceeded the maximum feed opening (800mm x 550mm) of the jaw crusher, operations halted while hydraulic rock-breakers or hazardous secondary blasting was deployed. The objective was to engineer blast designs that consistently deliver muckpiles with an 80% passing size (P80) below 450mm.',
        points: [
          'High secondary rock-breaking costs and fuel expenditures.',
          'Uncontrolled muckpile toe formation hindering front-end loader loading rates.',
          'Backbreak and loose crest rocks creating hazardous working conditions on upper benches.',
          'Inconsistent drillhole inclinations causing uneven explosive energy distribution.'
        ]
      },
      {
        title: 'Blasting Pattern Synthesis in Opit-blast & Field Surveying',
        subtitle: '2. Numerical Blast Geometry & Theodolite Alignment',
        image: PORTFOLIO_IMAGES.quarryBlasting,
        imageCaption: 'Figure 4: Opit-blast simulated timing initiation sequence and field bench theodolite alignment survey.',
        narrative:
          'Using Opit-blast software, blast patterns were engineered considering rock density (2.68 t/m³), compressive strength, and structural joint sets. Burden was engineered at 2.6m, spacing at 3.0m, with 12m bench height, 1.2m sub-drilling, and 2.4m gravel stemming. Non-electric detonator millisecond delays (17ms between holes, 42ms between rows) were configured to promote inter-hole rock collision and maximize shearing action.',
        points: [
          'Surveyed borehole collaring and drilled inclination angles using high-precision theodolite.',
          'Checked borehole depth with weighted measuring tapes to identify sludge fill or water presence.',
          'Adjusted explosive column charge (ANFO and emulsion booster cartridges) based on measured bench burden.',
          'Eliminated dangerous backbreak by optimizing front-row toe burden and initiation angle.'
        ]
      },
      {
        title: 'Muckpile Fragmentation Analysis via Split Engineering',
        subtitle: '3. Digital Photogrammetric Granulometry & P80 Validation',
        narrative:
          'Following detonation, muckpiles were photographed with optical scaling balls placed at multiple elevation points. Digital images were analyzed using Split Engineering software. The software automatically delineated individual rock particle contours and computed cumulative size distribution curves. Results were compared against theoretical Kuz-Ram model predictions to calibrate future powder factors.',
        points: [
          'Generated automated particle size distribution (PSD) curves and $P_{80}$ / $P_{50}$ metrics.',
          'Verified that 92.4% of total blasted material fell comfortably within jaw crusher intake specs.',
          'Calculated optimum powder factor ($0.68 \\text{ kg/m}^3$) for high-strength charnockitic granite.',
          'Reduced boulder formation (> 600mm) from 18.5% down to less than 3.2% of total blast volume.'
        ],
        calloutBox: {
          label: 'Crusher Throughput Result',
          text: 'Completely eliminated primary jaw crusher feed choking downtime, boosting hourly aggregate throughput by 26% across the entire processing plant.'
        }
      },
      {
        title: 'Dimension Stone Extraction with Diamond Wire Saws',
        subtitle: '4. Structural Block Cutting & Tertiary Polishing QA',
        narrative:
          'In addition to aggregate production, high-value decorative granite blocks were harvested for architectural dimension stone. Diamond wire saws and double-blade cutting machines were oriented parallel and perpendicular to principal geological joint planes to preserve rock integrity without introducing micro-fractures.',
        points: [
          'Mapped natural joint orientations (strike/dip) to determine optimal wire saw cutting trajectories.',
          'Cooled and lubricated diamond wire bead loops with pressurized water recirculating circuits.',
          'Supervised slab extraction, ensuring precise block squareness and minimal cosmetic surface damage.',
          'Maintained quality control across tertiary polishing units, achieving mirror-finish architectural slabs.'
        ]
      }
    ],
    keyFeatures: [
      'Engineered burden-to-spacing ratios and non-electric initiation delays for optimal fragmentation',
      'Conducted precise theodolite borehole angle checks to ensure design compliance',
      'Continuous muckpile photographic sampling for automated granulometry curve generation',
      'Quality assurance on dimensional granite slabs using double-blade cutting machines and tertiary polishing'
    ],
    resultsAndImpact:
      'Eliminated oversized block secondary blasting delays, drastically reduced jaw crusher downtime, and optimized aggregate yield across full-scale quarry operations.'
  },
  {
    id: 'mineedu-club-initiative',
    title: 'Mineedu Club: Mining Software Engineering & Technical Training Hub',
    subtitle: 'Founder & Technical Director',
    category: 'ventures',
    image: PORTFOLIO_IMAGES.flotationRig,
    galleryImages: [
      {
        url: PORTFOLIO_IMAGES.flotationRig,
        caption: 'Mineedu Club engineering workshop training students on Tier-1 mining software and open pit layouts.'
      },
      {
        url: PORTFOLIO_IMAGES.microminePit,
        caption: 'Hands-on CAD modeling session for geological wireframing and pit bench scheduling.'
      }
    ],
    leadText:
      'Founded a premier departmental engineering club dedicated to training students and young engineers on industry-standard mining software (Surpac, Deswik, Micromine, Opit-blast) and solving real-world mining technical problems.',
    fullDescription:
      'Established and directed the Mineedu Club to bridge the gap between academic theory and modern industrial software practices. Developed structured curriculum modules covering open-pit and underground design, wireframe modeling, blast pattern generation, geostatistical variography, and mine scheduling. Mentored dozens of engineering students through practical case studies and hands-on software workshops.',
    tags: ['Leadership', 'Geovia Surpac', 'Deswik', 'Micromine', 'Opit-blast', 'Training & Mentorship'],
    metrics: [
      { label: 'Students Trained', value: '100+ Engineers' },
      { label: 'Software Suites', value: '4 Major CAD/GIS' },
      { label: 'Workshops Held', value: '20+ Sessions' },
      { label: 'Hands-on Projects', value: 'Multi-Discipline' }
    ],
    engineeringSpecs: {
      material: 'Curriculum development, technical case studies, mine datasets',
      cadSoftware: 'Geovia Surpac, Deswik, Micromine, Opit-blast, QGIS, Global Mapper',
      analysisMethod: 'Geostatistical kriging, blast fragmentation analysis, pit schedule sequencing',
      operatingParams: 'Technical workshops, computer lab bootcamps, capstone design coaching',
      codeStack: 'Python, Excel macros, Surpac TCL/SCL scripting'
    },
    designSections: [
      {
        title: 'Mission & Strategic Motivation',
        subtitle: '1. Bridging Academia and Industry Mining Tech',
        narrative:
          'Many mining engineering programs teach fundamental theoretical equations but provide limited hands-on experience with the specialized software packages demanded by global mining companies and quarry operators. As founder of Mineedu Club at the National Advanced School of Engineering of Bamenda (NAHPI), I created a structured technical ecosystem to equip engineers with practical mastery of Geovia Surpac, Deswik, Micromine, and Opit-blast.',
        points: [
          'Formulated intensive hands-on computer workshops using real exploration drillhole datasets.',
          'Tackled authentic African quarry and mining case studies (aggregate, bauxite, iron ore, pozzolan).',
          'Trained students on geostatistical resource estimation, wireframe modeling, and mine scheduling.',
          'Established peer-to-peer mentoring and portfolio-building sessions.'
        ]
      },
      {
        title: 'Curriculum Architecture & Hands-on Modules',
        subtitle: '2. Software Modules from Exploration to Blasting',
        image: PORTFOLIO_IMAGES.flotationRig,
        imageCaption: 'Figure 5: Training session materials covering geological block modeling, pit pushback optimization, and blast simulations.',
        narrative:
          'The curriculum was organized into four progressive tracks: (1) Geological Modeling with Geovia Surpac, (2) Strategic Mine Design with Micromine and Deswik, (3) Blast Pattern Simulation with Opit-blast and Shotplus, and (4) Python and Data Science for automated geological data pipelines.',
        points: [
          'Surpac track: Importing drillhole access databases, string file digitizing, solid wireframe solids, ordinary kriging.',
          'Micromine & Deswik track: Pit shell generation, bench sequencing, haul road development, dump design.',
          'Blasting track: Kuz-Ram fragmentation equations, burden-spacing optimization, timing delays.',
          'Python track: Automating drillhole collar/survey/assay validation and matplotlib spatial plots.'
        ],
        calloutBox: {
          label: 'Impact Metric',
          text: 'Over 100 undergraduate and graduate engineers completed the workshop series, leading to direct internship and full-time engineering placements across mining operators.'
        }
      },
      {
        title: 'Industry Hackathons & Real-World Case Studies',
        subtitle: '3. Applied Technical Problem Solving',
        narrative:
          'Students collaborated in multidisciplinary teams to solve simulated and live industrial mining challenges, presenting complete technical feasibility reports to senior faculty and visiting industrial engineers.',
        points: [
          'Open Pit Design Hackathon: Proposed pit designs for domestic quarry aggregates and cement raw materials.',
          'Tailings & Environmental Workshop: Evaluated dam stability and geochemical acid rock drainage risks.',
          'Digital Quarry Optimization: Analyzed drone topography point clouds for volume stockpile calculations.',
          'Fostered a vibrant community of passionate mining engineering innovators.'
        ]
      }
    ],
    keyFeatures: [
      'Comprehensive hands-on training on Geovia Surpac (orebody modeling, block models, grade estimation)',
      'Practical drill and blast simulations using Opit-blast with theodolite surveying integration',
      'Deswik and Micromine workflow tutorials for open pit and underground design',
      'Collaborative problem-solving hackathons focused on local African quarry and exploration challenges'
    ],
    resultsAndImpact:
      'Empowered over 100 undergraduate and graduate mining engineers with job-ready competency in Tier-1 mining software packages, directly boosting employment placements.'
  }
];

export const SKILLSET_DATA: SkillCategory[] = [
  {
    categoryName: 'MINE DESIGN & PLANNING SOFTWARE',
    skills: [
      {
        name: 'Micromine',
        level: 'Expert',
        percentage: 95,
        context: 'Open pit mine design, 3D block modeling, pit optimization, pozzolan deposit planning'
      },
      {
        name: 'Geovia Surpac',
        level: 'Expert',
        percentage: 92,
        context: 'Wireframe modeling, geostatistics, reserve calculation, drillhole database management'
      },
      {
        name: 'Deswik',
        level: 'Proficient',
        percentage: 86,
        context: 'Mine design, production scheduling, haulage simulation, underground & open pit workflows'
      },
      {
        name: 'Whittle',
        level: 'Proficient',
        percentage: 82,
        context: 'Strategic life-of-mine pit optimization, nested pit shells, cutoff grade analysis'
      },
      {
        name: 'Open Pit Design & Layout',
        level: 'Expert',
        percentage: 94,
        context: 'Bench geometry, slope stability compliance, haul road design, waste dump allocation'
      },
      {
        name: 'Operational Budgeting',
        level: 'Proficient',
        percentage: 80,
        context: 'OPEX/CAPEX forecasting, equipment productivity, unit cost tracking per tonne'
      }
    ]
  },
  {
    categoryName: 'DRILLING, BLASTING & STONE PROCESSING',
    skills: [
      {
        name: 'Opit-blast',
        level: 'Expert',
        percentage: 95,
        context: 'Blast pattern design, burden/spacing calculation, hole inclination, vibration control'
      },
      {
        name: 'Shotplus',
        level: 'Proficient',
        percentage: 84,
        context: 'Electronic & pyrotechnic blast timing simulation, initiation sequence modeling'
      },
      {
        name: 'Fragmentation Analysis (Split Engineering)',
        level: 'Expert',
        percentage: 92,
        context: 'Muckpile granulometry, P80 sizing, crusher feed optimization, digital photo analysis'
      },
      {
        name: 'Drilling & Blast Pattern Planning',
        level: 'Expert',
        percentage: 94,
        context: 'Theodolite drill pattern alignment, borehole surveying, drilling parameter tuning'
      },
      {
        name: 'Stone Processing & Wire Saws',
        level: 'Expert',
        percentage: 90,
        context: 'Diamond wire saws, double-blade cutting machines, tertiary polishing, slab QA/QC'
      },
      {
        name: 'Rock Mechanics & Geotechnics',
        level: 'Proficient',
        percentage: 86,
        context: 'RMR, Q-system, bench slope stability, fracture network structural geology'
      }
    ]
  },
  {
    categoryName: 'GEOLOGICAL EXPLORATION, GIS & CORE LOGGING',
    skills: [
      {
        name: 'QGIS & ArcGIS',
        level: 'Expert',
        percentage: 95,
        context: 'Geologic mapping, hydrological modeling, slope maps, Landsat elevation extraction'
      },
      {
        name: 'Core Logging & Golden Software Strater',
        level: 'Expert',
        percentage: 92,
        context: 'Lithological descriptive logging, RQD evaluation, core photography and cross sections'
      },
      {
        name: 'Geological Field Mapping & Outcrop Sampling',
        level: 'Expert',
        percentage: 94,
        context: 'GPS and compass clinometer geo-referencing, structural bedding, outcrop documentation'
      },
      {
        name: 'Surfer & Global Mapper',
        level: 'Proficient',
        percentage: 88,
        context: 'Contour mapping, digital elevation models (DEM), 3D surface grid modeling'
      },
      {
        name: 'Resource Estimation & Geostatistics',
        level: 'Proficient',
        percentage: 85,
        context: 'Inverse distance weighting, ordinary kriging, variography, orebody grade interpolation'
      },
      {
        name: 'HSEQ Compliance & Quality Control',
        level: 'Proficient',
        percentage: 88,
        context: 'Quarry health & safety protocols, environmental stewardship, aggregate compliance'
      }
    ]
  },
  {
    categoryName: 'MINING AI, PROGRAMMING & DATA SCIENCE',
    skills: [
      {
        name: 'Neural Networks & Machine Learning',
        level: 'Expert',
        percentage: 92,
        context: 'Python ML models for drilling parameter optimization, automated core logging classification'
      },
      {
        name: 'Python (Pandas, NumPy, Scikit-Learn)',
        level: 'Expert',
        percentage: 90,
        context: 'Geological data analysis, automated log generation, predictive engineering algorithms'
      },
      {
        name: 'Power BI & Excel Advanced Modeling',
        level: 'Expert',
        percentage: 94,
        context: 'Production KPI dashboards, reconciliation models, automated drill-and-blast logs'
      },
      {
        name: 'C Programming',
        level: 'Proficient',
        percentage: 80,
        context: 'Algorithmic computing, structured programming, engineering simulations'
      },
      {
        name: 'Project Management & Leadership',
        level: 'Expert',
        percentage: 92,
        context: 'Google Project Management Certified, founder of Mineedu Club, cross-team supervision'
      },
      {
        name: 'Data Management & Databases',
        level: 'Proficient',
        percentage: 86,
        context: 'IBM Data Management Coursera, exploration drillhole database administration'
      }
    ]
  }
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    period: 'March 2026 — Current',
    institution: 'Coursera / IBM',
    location: 'Online Professional Education',
    degree: 'IBM Data Management Specialization',
    coursework: [
      'Relational Database Architecture & SQL',
      'Big Data Engineering & Cloud Data Warehousing',
      'Data Governance, Integrity & ETL Pipelines'
    ],
    involvement: [
      {
        role: 'Applied Data Engineering',
        details: [
          'Implemented structured databases for mineral exploration telemetry and drillhole records',
          'Automated data validation pipelines for production and QA/QC datasets'
        ]
      }
    ]
  },
  {
    period: 'March 2026 — Current',
    institution: 'Coursera / Google',
    location: 'Online Professional Education',
    degree: 'Google Project Management Professional Certificate',
    coursework: [
      'Project Initiation, Planning & Execution',
      'Agile & Waterfall Methodologies in Engineering',
      'Risk Management, Budgeting & Procurement Strategy'
    ],
    involvement: [
      {
        role: 'Mining Project Leadership',
        details: [
          'Applied agile tracking to quarry production schedules and resource estimation workflows',
          'Structured stakeholder communication frameworks for multi-disciplinary site teams'
        ]
      }
    ]
  },
  {
    period: 'January — June 2026',
    institution: 'BRIMM — University of British Columbia',
    location: 'Vancouver, Canada (Distance / Executive)',
    degree: 'Microcertificate in Economic Leadership for Mining',
    coursework: [
      'Mineral Economics & Valuation of Mining Assets',
      'Strategic Decision-Making in Global Mining Ventures',
      'ESG, Social License to Operate & Sustainable Resource Stewardship'
    ],
    involvement: [
      {
        role: 'Mining Executive Leadership Cohort',
        details: [
          'Analyzed capital expenditure models and discount rates for Greenfield and Brownfield mining developments',
          'Evaluated modern ESG metrics across critical mineral supply chains'
        ]
      }
    ],
    honors: ['Executive Mining Leadership Cohort']
  },
  {
    period: '2024 — 2025',
    institution: 'National Higher Polytechnic Institute (NAHPI), University of Bamenda',
    location: 'Bamenda, Cameroon',
    degree: 'Master of Engineering (M.Eng.) — Mining and Mineral Engineering',
    gpa: '3.72 / 4.00',
    coursework: [
      'Advanced Mine Planning & Optimization (Micromine & Deswik)',
      'Rock Mechanics, Slope Stability & Geotechnical Modeling',
      'Machine Learning & Mining AI in Drilling & Exploration',
      'Advanced Geostatistics & 3D Orebody Wireframing (Surpac)',
      'Environmental Impact Assessment & Tailings Stewardship',
      'Mineral Economics, Feasibility Studies & Quarry Management'
    ],
    involvement: [
      {
        role: 'Mineedu Club — Founder & Technical Lead',
        details: [
          'Founded departmental club to train students in mining software (Surpac, Deswik, Micromine, Opit-blast)',
          'Facilitated weekly technical problem-solving sessions on rock mechanics and pit optimization'
        ]
      },
      {
        role: 'Research & Applied Engineering Lead',
        details: [
          'Developed neural network models for rotary drilling parameter optimization and penetration prediction',
          'Engineered computer-based core logging software using machine learning for lithological classification'
        ]
      }
    ],
    honors: [
      'High Academic Distinction (GPA: 3.72/4.00)',
      'Graduate Engineering Leadership Recognition'
    ]
  },
  {
    period: '2020 — 2024',
    institution: 'National Higher Polytechnic Institute (NAHPI), University of Bamenda',
    location: 'Bamenda, Cameroon',
    degree: 'Bachelor of Engineering (B.Eng.) — Mining and Mineral Engineering',
    gpa: '3.39 / 4.00',
    coursework: [
      'Surface & Underground Mining Methods',
      'Drilling & Blasting Engineering (Opit-blast & Kuz-Ram)',
      'Mineral Processing & Beneficiation Circuits',
      'Structural Geology & Geomorphology',
      'Mine Surveying (Theodolite & GPS Outcrop Mapping)',
      'Fluid Mechanics & Rock Mechanics',
      'GIS & Geomatics (QGIS, ArcGIS, Surfer, Global Mapper)',
      'HSEQ Regulations & Industrial Safety'
    ],
    involvement: [
      {
        role: 'Field Mapping & Capstone Exploration',
        details: [
          'Collaborated on proposed open pit mine design for pozzolan deposit at Dangote Quarry using Micromine',
          'Supervised quarry aggregate production and diamond wire saw cutting at Gracam'
        ]
      }
    ],
    honors: [
      'Graduated with Honors (GPA: 3.39/4.00)',
      'Departmental Technical Excellence Award'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    period: '08/2025 — 11/2025',
    company: 'MIPROMALO (www.mipromalo.cm)',
    location: 'Yaoundé, Cameroon',
    role: 'Research Intern (Internship · On-site)',
    bullets: [
      'Conducted research on the fabrication of highly refractory bricks using locally available materials such as bauxite, graphite and a group of additives.',
      'Conducted a group of experimental tests and measurement to determine the thermal conductivity, refractoriness under load, compressive strength etc.'
    ],
    technologiesUsed: ['Refractory Materials', 'Thermal Conductivity', 'Refractoriness Under Load (RUL)', 'Compressive Strength Testing', 'Bauxite & Graphite', 'Materials Engineering']
  },
  {
    period: '08/2024 — 09/2024',
    company: 'ARRDEL BEE (www.arrdel.org)',
    location: 'Yaoundé, Cameroon',
    role: 'Geographic Information Systems Analyst (Part-time · On-site)',
    bullets: [
      'Engineered GIS databases and performed territorial spatial analysis for municipal and regional socio-economic development initiatives.',
      'Extracted, sanitized, and georeferenced field datasets to generate thematic cartographic visualizations and decision-support spatial models.',
      'Coordinated spatial data workflows across territorial digital platforms to enhance community resource planning and infrastructure management.'
    ],
    technologiesUsed: ['QGIS', 'ArcGIS', 'Spatial Data Analysis', 'Territorial Cartography', 'Remote Sensing', 'Geodatabases']
  },
  {
    period: '03/2023 — 09/2023',
    company: 'Granulats du Cameroun Sarl (Gracam)',
    location: 'Yaounde, Cameroon',
    role: 'Mining Engineering Intern (Aggregate & Granite Quarry)',
    bullets: [
      'Coordinated with technicians to mitigate oversized materials entering the jaw crusher while supervising the entire aggregate production process.',
      'Engineered blast designs using Opit-blast and devised drill patterns with theodolites; provided recommendations on hole inclination and depth to maintain compliance with design specifications.',
      'Utilised Split Engineering software to scrutinise blast outcomes and digital fragmentation (P80 curve) to optimise subsequent drilling and blasting operations.',
      'Oversaw the cutting of high-strength granite blocks with diamond wire saws and double-blade machines, integrating knowledge of structural geology and natural joint orientations.',
      'Administered tertiary polishing units and upheld stringent quality assurance standards on finished granite slabs.'
    ],
    technologiesUsed: ['Opit-blast', 'Split Engineering', 'Theodolite Surveying', 'Diamond Wire Saws', 'Jaw Crushers', 'Structural Geology']
  },
  {
    period: '09/2022 — 10/2022',
    company: 'CAMINEX SA',
    location: 'Djoum, Cameroon',
    role: 'Mining Engineering Intern (Exploration)',
    bullets: [
      'Executed regional field mapping employing GPS and compass clinometers to document geo-referenced outcrops and collect geochemical and lithological samples effectively.',
      'Crafted detailed lithological logs of diamond drill hole cores utilising Golden Software Strater, encompassing lithological descriptions, stratigraphic contacts, and photographic imagery.',
      'Extracted digital elevation data from Landsat satellite imagery to generate comprehensive 2D and 3D terrain and structural maps of the exploration site.'
    ],
    technologiesUsed: ['Golden Software Strater', 'Landsat Imagery', 'GPS & Clinometer', 'Core Logging', 'Field Sampling', '3D Geological Mapping']
  },
  {
    period: '08/2021 — 09/2021',
    company: 'Soft Mining Engineering Group',
    location: 'Yaounde, Cameroon',
    role: 'Geomatics Intern',
    bullets: [
      'Produced intricate geologic maps of clay sampling sites for industrial brick and ceramic production using QGIS and ArcGIS.',
      'Developed slope, hydrological, and geomorphological maps utilising high-resolution satellite imagery to ensure precision in site operational planning.',
      'Facilitated training sessions for fellow engineering interns on spatial mapping workflows using QGIS, Surfer, and Global Mapper.'
    ],
    technologiesUsed: ['QGIS', 'ArcGIS', 'Surfer', 'Global Mapper', 'Satellite Photogrammetry', 'Hydrological Modeling']
  }
];

export const VENTURES_AND_INTERESTS: VentureItem[] = [
  {
    name: 'Mineedu Club',
    tagline: 'Technical Mining Software Training Community',
    stage: 'Founded & Active Community',
    description:
      'Departmental engineering hub training future mining professionals in industry-standard CAD, mine design, and blasting software (Surpac, Deswik, Micromine, Opit-blast) while tackling real operational challenges.',
    metrics: '100+ Engineers Trained · 4 Software Modules',
    iconName: 'Cpu'
  },
  {
    name: 'Quarry Optimization & Blasting',
    tagline: 'Precision Fragmentation & Crusher Feed',
    stage: 'Field Proven at Gracam',
    description:
      'Applying digital Split Engineering photogrammetry and Opit-blast computerized modeling to eliminate secondary blasting, balance rock granulometry, and maximize plant throughput.',
    metrics: 'Zero Oversize Choking · P80 Calibration',
    iconName: 'Flame'
  },
  {
    name: 'Exploration Core Logging & GIS',
    tagline: 'Remote Sensing & Automated Stratigraphy',
    stage: 'Field Applied with CAMINEX SA',
    description:
      'Generating geo-referenced Landsat 3D surfaces and automated drillhole core logs with Golden Software Strater, advancing rapid lithological and geochemical modeling in remote terrains.',
    metrics: 'Landsat 3D DEMs · Sub-meter Outcrop GPS',
    iconName: 'Camera'
  },
  {
    name: 'Mining AI & Machine Learning',
    tagline: 'Neural Network Process Optimization',
    stage: 'M.Eng. Research Implementation',
    description:
      'Developing neural regression and computer vision models in Python to predict drill penetration rates and classify rock core specimens automatically.',
    metrics: '94.6% ROP Accuracy · Python / PyTorch',
    iconName: 'Atom'
  }
];
