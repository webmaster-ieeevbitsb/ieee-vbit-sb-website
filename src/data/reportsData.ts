// Define the structure for a single report
export type Report = {
  title: string;
  driveLink: string;
};

// Define the structure for a group of reports under a specific year
export type ReportYearGroup = {
  year: string;
  reports: Report[];
};

// Populate the data with all reports, organized by year
export const reportsData: ReportYearGroup[] = [
  {
    year: '2024 – 25',
    reports: [
      { title: 'DesignX 2.0', driveLink: 'https://drive.google.com/file/d/1Mh6wLh9lcqNQK45RSYlRAAUx_TdBemaG/view?usp=drive_link' }, { title: 'IEEE Insights', driveLink: '#' },
      { title: 'WiEducate 3.0', driveLink: 'https://drive.google.com/file/d/1qfQD2znk-jvTJg3_YYXssTqTN7aXcq1K/view?usp=drive_link' }, { title: 'Industrial Visit To Power Grid', driveLink: 'https://drive.google.com/file/d/1ce-ffoTPHVWyjFuTewzJ3W9UtHxwad0H/view?usp=drive_link' },
      { title: 'AlgoVeda', driveLink: 'https://drive.google.com/file/d/1HL8T8NxQs9KyxSWZ2mGM2BMn5Czek2Oo/view?usp=drive_link' }, { title: 'Workshop On Antenna Design Using HFSS', driveLink: 'https://drive.google.com/file/d/1087_2yfiI6pYfmQr95HxwwszG_BZZQM_/view?usp=drive_link' },
    ],
  },
  {
    year: '2023 – 24',
    reports: [
      { title: 'Elevate', driveLink: 'https://drive.google.com/file/d/1gwvvfGOng8uMgtIACs1-krvIL8fYbu5V/view?usp=drive_link' }, { title: 'CodeQuest', driveLink: 'https://drive.google.com/file/d/17T6gx0ikRGh2bvoNP_K7yb7U3ksXTP7A/view?usp=drive_link' },
      { title: 'Webinar on Design thinking', driveLink: 'https://drive.google.com/file/d/1hsGi47dT4s7Y3gbUJdVs7HCanXTQvzn8/view?usp=drive_link' }, { title: 'WiEducate 2.0', driveLink: 'https://drive.google.com/file/d/1k2UNKnXQu9zZUXlOgeeQIno79X5e23iC/view?usp=drive_link' },
      { title: 'Avishkar 2K24', driveLink: 'https://drive.google.com/file/d/1XSp5xW6OoFw1T4mqlOZwboF6kIdTMc0_/view?usp=drive_link' }, { title: 'Workshop on image processing using Matlab', driveLink: 'https://drive.google.com/file/d/1InJDQtpujNdB-oUc8lqnbhG5Gk2aKetW/view?usp=drive_link' },
      { title: 'Circuitry', driveLink: 'https://drive.google.com/file/d/1QVrYYyNMIVZ4V7rTKWDggfRnxXI-OMh3/view?usp=drive_link' },
    ],
  },
  {
    year: '2022 – 23',
    reports: [
      { title: 'Workshop on .NET', driveLink: '#' }, { title: 'Avishkar 2K23', driveLink: '#' },
      { title: 'WiEducate', driveLink: '#' }, { title: 'Workshop on Neuro Robotics', driveLink: '#' },
      { title: 'Industrial visit to C-MET', driveLink: '#' },
    ],
  },
  {
    year: '2021 – 22',
    reports: [
      { title: 'C for Error', driveLink: '#' }, { title: 'Wi-Fi Controlled Robot', driveLink: '#' },
      { title: 'Machine Learning Workshop+Hackathon', driveLink: '#' }, { title: '#IWD2022', driveLink: '#' },
      { title: 'Workshop on Industry perspective of VLSI Design', driveLink: '#' }, { title: 'Workshop on DesignX', driveLink: '#' },
      { title: 'Avishkar 2K22', driveLink: '#' }, { title: 'Epilogue 2.0', driveLink: '#' },
    ],
  },
  {
    year: '2020 – 21',
    reports: [
      { title: 'Unravel', driveLink: '' }, { title: 'IEEEXtreme 14.0', driveLink: '#' },
      { title: 'Surveykshana', driveLink: '#' }, { title: 'Webinar on Artificial Neural Network', driveLink: '#' },
      { title: 'Code Hustle 2.0', driveLink: '#' }, { title: 'Avishkar2k21', driveLink: '#' },
      { title: 'Epilogue', driveLink: '#' },
    ],
  },
  {
    year: '2019 – 20',
    reports: [
        { title: 'GitHub 101', driveLink: 'https://drive.google.com/file/d/1JWD_rPzzrvGPRPwZ-iad013zAMY_rq8K/view' }, { title: 'Xplore Webinar', driveLink: 'https://drive.google.com/file/d/1tzs-C0sDSG2LGvKewNvFhvpk3b1R-Luu/view' },
        { title: 'Unplug', driveLink: 'https://drive.google.com/file/d/1Dfev4kM6rcYqTlPa9Nk21BhE29qpnfjr/view' }, { title: '#IWD2020', driveLink: 'https://drive.google.com/file/d/1nsKzFopVcb35dLA3InfhizZAA7WsNdpE/view' },
        { title: 'SDP on Search Engine Optimisation', driveLink: 'https://drive.google.com/file/d/1h_DhaK-jlvhLqTWqdVGRfqy6pB-_tMyZ/view' }, { title: 'Seminar on Bacterial Concrete', driveLink: 'https://drive.google.com/file/d/1qYJKh9tMUwM_FmBJc8Ud-tNfQGeAZiBp/view' },
        { title: 'FDP & SDP on IEEE Xplore', driveLink: 'https://drive.google.com/file/d/1Utf_v7K7ldkWt66zvJWnZPFtzB8lJGF5/view' }, { title: 'Industrial Visit to ICOMM', driveLink: 'https://drive.google.com/file/d/1WYIYA3OMoZcln6VZZzyj4t6KJrvkJX3N/view' },
        { title: 'Guest Lecture on Hybrid Electric Vehicles', driveLink: 'https://drive.google.com/file/d/1WueAcmGjuKPGZBwqiblG5-tTRlXPyN3i/view' }, { title: 'Guest Lecture on Digital Pass Band Transmission', driveLink: 'https://drive.google.com/file/d/1jcpnSM7xparAFs9JvjVgSyswdpznfmGD/view' },
        { title: 'Industrial Visit to IMD', driveLink: 'https://drive.google.com/file/d/1XVdc0x-DaPGJF77-3GH0V4GpFjNzg34U/view' }, { title: 'Wireless Sensor Networks and Applications', driveLink: 'https://drive.google.com/file/d/1lcyLaRURXOh5oPRCIFYepyTcsny1yYT7/view' },
        { title: 'Avishkar 2K20', driveLink: 'https://drive.google.com/file/d/1dzKzst0j_Lf8FK6Ra_KWX2WJxmq7_FbN/view' },
    ],
  },
  {
    year: '2018 – 19',
    reports: [
        { title: 'Star Kid', driveLink: 'https://drive.google.com/file/d/1aupodFsZ98I7Yaea2KIkbs2nFS0ot6kf/view' }, { title: 'NCEET 19', driveLink: '' },
        { title: 'Womens Day Celebrations', driveLink: 'https://drive.google.com/file/d/1oSCj9AZ-mu7XGpoSdGAyyPw1Xaf-A5aq/view' }, { title: 'Avishkar 2K19', driveLink: 'https://drive.google.com/file/d/1vMpnTN6VpW28yXiT_XeQ9g9o4_ynUr_K/view' },
        { title: 'Industrial Visit To CPRI', driveLink: 'https://drive.google.com/file/d/1KyIjfQTqyQmsiV31qgdxfiLzmY3QmLLj/view' }, { title: 'Literagon', driveLink: 'https://drive.google.com/file/d/1_HT3B_cAar0gAe3lvlB0bQmBPWu-F-T2/view' },
        { title: 'Appathon', driveLink: 'https://drive.google.com/file/d/16mp9wFttyDgxZYEqqy7uWfERllNnfhFB/view' }, { title: 'Inceptra', driveLink: 'https://drive.google.com/file/d/1z5W5JtInTmm_pS0PMahyr0wVrxzEG8K1/view' },
        { title: 'Industrial Visit To IMD', driveLink: 'https://drive.google.com/file/d/1Od2Zt9mdhkOizJIizQC-Kt6FKDH9O77s/view' }, { title: 'Machine Learning Bootcamp And Hackathon', driveLink: 'https://drive.google.com/file/d/1j7eEICZ-wYLQbYw5ZVD2S8cXQqMwjyw4/view' },
    ],
  },
  {
    year: '2017 – 18',
    reports: [
        { title: 'Industrial Visit to CPRI', driveLink: 'http://drive.google.com/file/d/1Z5pfi8ckNbIzuTZgWzWbh5csgYoL2kf5/view' }, { title: 'Star Kid', driveLink: 'https://drive.google.com/file/d/14BM6RiZN5tYccnTWAsbjCnMFWV6Eaib4/view?usp=drive_link' },
        { title: 'Techniethon', driveLink: 'https://drive.google.com/file/d/1AQQXxXfs6B4uob4ta6UB4bPCAhwH61IF/view' }, { title: 'Avishkar 2K18', driveLink: 'https://drive.google.com/file/d/1PzKeVJAFUtApXLM_xWHIvgriSi5CHA7J/view' },
        { title: 'Industrial Visit to BSNL', driveLink: 'https://drive.google.com/file/d/1AQQXxXfs6B4uob4ta6UB4bPCAhwH61IF/view' }, { title: 'Avishkar 2K18 Inter Round', driveLink: 'https://drive.google.com/file/d/1PzKeVJAFUtApXLM_xWHIvgriSi5CHA7J/view' },
        { title: 'Art Boats', driveLink: 'https://drive.google.com/file/d/1fHpOr6tARo83SiTccM157vSHicSWINku/view?usp=drive_link' },
    ],
  },
  {
    year: '2016 – 17',
    reports: [
        { title: 'Pre IEEE Xtreme (Codex)', driveLink: 'https://drive.google.com/file/d/1mNSFc-NjHoI80l_vWhtZDke1PrgB68u9/view' }, { title: '3D Game Design', driveLink: 'https://drive.google.com/file/d/1tt3ND0tuNKVrIJ9TS4VQxq1JM68mCxuX/view' },
        { title: 'Tech with Arduino', driveLink: 'https://drive.google.com/file/d/1mxVBbE0nqZkc8QpGqIs-ZvBrWTZiEHJL/view' }, { title: 'Industrial Visit', driveLink: 'https://drive.google.com/file/d/1ZCX8zEN_vu5q1sv3EKygcmGqd35keVtU/view' },
        { title: 'Star Kid', driveLink: 'https://drive.google.com/file/d/14BM6RiZN5tYccnTWAsbjCnMFWV6Eaib4/view' }, { title: 'TECHNICAL GABFEST', driveLink: 'https://drive.google.com/file/d/1YfIjR24Dygq5eazEK3dCeYChBxPVvDDb/view' },
        { title: 'STAR - EDUCATE A GIRL CHILD', driveLink: 'https://drive.google.com/file/d/1s4sm_3Ktda66PbzFNG1lz0Eoti56z90U/view' }, { title: 'Image Processing Workshop', driveLink: 'https://drive.google.com/file/d/1Hn-y9-1W9BBGVur13A991hPYrXgDkqoz/view' },
        { title: 'Comsoc Colloquium', driveLink: 'https://drive.google.com/file/d/1CHdodo6kGWdI4zsjjh6hN1_JiZ_r0Xoh/view' },
    ],
  },
  {
    year: '2015 – 16',
    reports: [
        { title: 'John Bardeen Memorial Report', driveLink: 'https://drive.google.com/file/d/1kR_qUF6lT8YGZOGDqG0zRG3_wk1eVjnM/view' }, { title: 'Avishkar2k16 Intra Report', driveLink: 'https://drive.google.com/file/d/1DuGwJKw6PF6V-xZDvKHfMPQ1XYqZ5Dqw/view' },
        { title: 'STEP', driveLink: 'https://drive.google.com/file/d/1ikh7RV1Dd6-5_-9hQ1iDDNMEApiYMzBp/view' }, { title: 'STAR - Lift The Children', driveLink: 'https://drive.google.com/file/d/1sMIorR5PHWow-hDRf9KuabLP--VLcFIV/view' },
        { title: '3D Printing', driveLink: 'https://drive.google.com/file/d/1ja2X4RxEVkBuwzmCO5QIRA2-r2KWzZNA/view' }, { title: 'Power colloquium 2k16', driveLink: 'https://drive.google.com/file/d/1CBEaxAMvjABIS4ZUwJzKLIrStmI3zftz/view' },
        { title: 'Industrial Visit - Comsoc', driveLink: 'https://drive.google.com/file/d/1iwwIGA70xXFjlw9tP5QEJLReHtdKT7a7/view' }, { title: 'Image Processing Workshop', driveLink: 'https://drive.google.com/file/d/1Hn-y9-1W9BBGVur13A991hPYrXgDkqoz/view' },
        { title: 'Art Beat', driveLink: 'https://drive.google.com/file/d/11b9AoFhYlCkK01pdalhXDle9d1PLGxUn/view' }, { title: 'Alumini Meet', driveLink: 'https://drive.google.com/file/d/17lxmzFsPjQopF-YoI7_G6XU4lgpjOxyW/view' },
        { title: 'PALM', driveLink: 'https://drive.google.com/file/d/17girDzJbQgNTBJH3axvA1tAtRlsp3Tzu/view' },
    ],
  },
  {
    year: '2014 – 15',
    reports: [
        { title: 'IDEATE Report', driveLink: 'https://drive.google.com/file/d/1Ol76SdD0x7spETgNn1UIRzRIxXAtU4rU/view' }, { title: 'Talk On Entrepreneurship', driveLink: 'https://drive.google.com/file/d/1pFn43ZIX69Ma3xLq8afr5zl9XtzpLAfJ/view' },
        { title: 'STP Report', driveLink: 'https://drive.google.com/file/d/1S4JKBayA00cigoEO640pqkAbzPefOZ6C/view' }, { title: 'STAR program', driveLink: 'https://drive.google.com/file/d/1o00X4C1e1_PZofIPeDP4CV7TsRGVLqMp/view' },
        { title: 'Avishkar 2k15 Inter Round', driveLink: 'https://drive.google.com/file/d/1U1p1e-3mGYgsa73vCW2uBokBqX2HksV0/view' }, { title: 'PES Report', driveLink: 'https://drive.google.com/file/d/1EHNuoQD-grKYPW6o38gvF6rx-W_yPKmJ/view' },
        { title: 'Report on Computer Colloquium 15\'', driveLink: 'https://drive.google.com/file/d/1A3U10sUV_mPkMJlxh8hjZqiKvuuiCM0M/view' }, { title: 'F&D', driveLink: 'https://drive.google.com/file/d/1csfPNPw_SzqyxNuClr8wvC3-DR1vH2Ua/view' },
        { title: 'JB Day', driveLink: 'https://drive.google.com/file/d/1PhdMnqOieLpem7YgrftakC1X4maCf4vC/view' }, { title: 'Avishkar 2k15 INTRA', driveLink: 'https://drive.google.com/file/d/1N4A629UtUNCt8shOE8B7n2L0vWYvMzQU/view' },
        { title: 'John Bardeen Memorial', driveLink: 'https://drive.google.com/file/d/1JEFK47Lt6dz6pW2PU0dyDBWZcLfjOeRt/view' }, { title: 'Report on STAR Program', driveLink: 'https://drive.google.com/file/d/1E1bgY_-RvngPKjOgWhNHGlEvRPcraYry/view' },
        { title: 'The Second IEEE Communication Colloquium', driveLink: 'https://drive.google.com/file/d/1J7bB0Jz8kungPv9gf_XrMCMD5xPVIThm/view' },
    ],
  },
  {
    year: '2013 – 14',
    reports: [
        { title: 'Data Networking Workshop', driveLink: 'https://drive.google.com/file/d/1YdUVtu9E0V1hfYAoEK0EX9lp7SNPg_KN/view' }, { title: 'Report on SCAP', driveLink: 'https://drive.google.com/file/d/1hq7DrPZ2siHdKG53g3YdoQyOwm67qR7m/view' },
        { title: 'CODEX', driveLink: 'https://drive.google.com/file/d/1_e8uyd3YCL_5ZM-3-ZOXX0uDnyCLStc4/view' }, { title: 'EKAYANA', driveLink: 'https://drive.google.com/file/d/1tAB4zlxDxmICsJhfV51L64_GveQ2YdZ8/view' },
        { title: 'Eloquence', driveLink: 'https://drive.google.com/file/d/1BQPWLgeFZaAaOJA78Cp7fcZuhahFOJGw/view' }, { title: 'Circuit Designing Competition', driveLink: 'https://drive.google.com/file/d/1VmpFEuMVo_-yhQHRW06wD-nqxFDhqaLs/view' },
        { title: 'IEEE VBIT-SB ETDC Industrial Visit', driveLink: 'https://drive.google.com/file/d/15rTFnolyagiqUhu7wiHG6CRp01HHa922/view' }, { title: 'F&D', driveLink: 'https://drive.google.com/file/d/1csfPNPw_SzqyxNuClr8wvC3-DR1vH2Ua/view' },
        { title: 'IEEE VBIT-SB STAR Program', driveLink: 'https://drive.google.com/file/d/1Lq3iuqcwgJdrO06Dylulcp49sSyNNfR-/view' }, { title: 'IEEE VBIT-SB STEP', driveLink: 'https://drive.google.com/file/d/1gyMVq7nnULNmy3SR4i-77TFzg_nt_KRj/view' },
    ],
  },
];