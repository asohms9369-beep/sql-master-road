window.SQL_QUESTIONS = [
  {
    "id": 1,
    "level": "初級",
    "category": "SELECT",
    "title": "全件表示",
    "prompt": "patientsテーブルの全列を取得してください。",
    "answer": "SELECT * FROM patients;",
    "alternatives": [
      "SELECT * FROM patients"
    ],
    "xp": 10,
    "hint": "全列は * で表します。"
  },
  {
    "id": 2,
    "level": "初級",
    "category": "SELECT",
    "title": "列を選択",
    "prompt": "患者ID・年齢・病棟だけを取得してください。",
    "answer": "SELECT patient_id, age, ward FROM patients;",
    "alternatives": [
      "SELECT patient_id,age,ward FROM patients"
    ],
    "xp": 10,
    "hint": "列名をカンマで区切ります。"
  },
  {
    "id": 3,
    "level": "初級",
    "category": "SELECT",
    "title": "別名",
    "prompt": "patient_idを患者ID、ageを年齢という別名で表示してください。",
    "answer": "SELECT patient_id AS 患者ID, age AS 年齢 FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "別名には AS を使います。"
  },
  {
    "id": 4,
    "level": "初級",
    "category": "WHERE",
    "title": "入院中の患者",
    "prompt": "statusが入院中の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE status = '入院中';",
    "alternatives": [],
    "xp": 15,
    "hint": "WHEREで文字列条件を指定します。"
  },
  {
    "id": 5,
    "level": "初級",
    "category": "WHERE",
    "title": "75歳以上",
    "prompt": "75歳以上の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE age >= 75;",
    "alternatives": [],
    "xp": 15,
    "hint": "以上は >= です。"
  },
  {
    "id": 6,
    "level": "初級",
    "category": "WHERE",
    "title": "65歳未満",
    "prompt": "65歳未満の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE age < 65;",
    "alternatives": [],
    "xp": 15,
    "hint": "未満は < です。"
  },
  {
    "id": 7,
    "level": "初級",
    "category": "WHERE",
    "title": "複数条件AND",
    "prompt": "西6階かつ入院中の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE ward = '西6階' AND status = '入院中';",
    "alternatives": [],
    "xp": 20,
    "hint": "両方の条件は AND で結びます。"
  },
  {
    "id": 8,
    "level": "初級",
    "category": "WHERE",
    "title": "複数条件OR",
    "prompt": "西6階または西7階の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE ward = '西6階' OR ward = '西7階';",
    "alternatives": [
      "SELECT * FROM patients WHERE ward IN ('西6階','西7階')"
    ],
    "xp": 20,
    "hint": "どちらかは OR、複数候補は IN も使えます。"
  },
  {
    "id": 9,
    "level": "初級",
    "category": "WHERE",
    "title": "範囲指定",
    "prompt": "65歳以上75歳以下の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE age BETWEEN 65 AND 75;",
    "alternatives": [
      "SELECT * FROM patients WHERE age >= 65 AND age <= 75"
    ],
    "xp": 20,
    "hint": "BETWEENは両端を含みます。"
  },
  {
    "id": 10,
    "level": "初級",
    "category": "WHERE",
    "title": "否定条件",
    "prompt": "循環器内科以外の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE dept <> '循環器内科';",
    "alternatives": [
      "SELECT * FROM patients WHERE dept != '循環器内科'"
    ],
    "xp": 20,
    "hint": "等しくない条件は <> または != です。"
  },
  {
    "id": 11,
    "level": "初級",
    "category": "ORDER BY",
    "title": "年齢昇順",
    "prompt": "年齢の若い順に並べてください。",
    "answer": "SELECT * FROM patients ORDER BY age ASC;",
    "alternatives": [
      "SELECT * FROM patients ORDER BY age"
    ],
    "xp": 15,
    "hint": "昇順は ASC で、省略も可能です。"
  },
  {
    "id": 12,
    "level": "初級",
    "category": "ORDER BY",
    "title": "在院日数降順",
    "prompt": "在院日数の長い順に並べてください。",
    "answer": "SELECT * FROM patients ORDER BY days DESC;",
    "alternatives": [],
    "xp": 15,
    "hint": "降順は DESC です。"
  },
  {
    "id": 13,
    "level": "初級",
    "category": "ORDER BY",
    "title": "複数列ソート",
    "prompt": "病棟の昇順、同じ病棟では年齢の降順にしてください。",
    "answer": "SELECT * FROM patients ORDER BY ward ASC, age DESC;",
    "alternatives": [],
    "xp": 20,
    "hint": "複数列はカンマで区切ります。"
  },
  {
    "id": 14,
    "level": "初級",
    "category": "集計関数",
    "title": "患者総数",
    "prompt": "患者総数をpatient_countとして表示してください。",
    "answer": "SELECT COUNT(*) AS patient_count FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "COUNT(*)は行数を数えます。"
  },
  {
    "id": 15,
    "level": "初級",
    "category": "集計関数",
    "title": "平均年齢",
    "prompt": "平均年齢をavg_ageとして表示してください。",
    "answer": "SELECT AVG(age) AS avg_age FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "平均は AVG です。"
  },
  {
    "id": 16,
    "level": "初級",
    "category": "集計関数",
    "title": "最大在院日数",
    "prompt": "最大在院日数をmax_daysとして表示してください。",
    "answer": "SELECT MAX(days) AS max_days FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "最大値は MAX です。"
  },
  {
    "id": 17,
    "level": "初級",
    "category": "集計関数",
    "title": "最小年齢",
    "prompt": "最小年齢をmin_ageとして表示してください。",
    "answer": "SELECT MIN(age) AS min_age FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "最小値は MIN です。"
  },
  {
    "id": 18,
    "level": "初級",
    "category": "集計関数",
    "title": "在院日数合計",
    "prompt": "在院日数の合計をtotal_daysとして表示してください。",
    "answer": "SELECT SUM(days) AS total_days FROM patients;",
    "alternatives": [],
    "xp": 15,
    "hint": "合計は SUM です。"
  },
  {
    "id": 19,
    "level": "初級",
    "category": "SELECT",
    "title": "重複除外",
    "prompt": "病棟名を重複なしで表示してください。",
    "answer": "SELECT DISTINCT ward FROM patients;",
    "alternatives": [],
    "xp": 20,
    "hint": "DISTINCTで重複を除外します。"
  },
  {
    "id": 20,
    "level": "初級",
    "category": "WHERE",
    "title": "部分一致",
    "prompt": "facility_nameにクリニックを含む施設を取得してください。",
    "answer": "SELECT * FROM facilities WHERE facility_name LIKE '%クリニック%';",
    "alternatives": [],
    "xp": 20,
    "hint": "%は任意の文字列を表します。"
  },
  {
    "id": 21,
    "level": "中級",
    "category": "GROUP BY",
    "title": "病棟別患者数",
    "prompt": "病棟別患者数をpatient_countとして集計してください。",
    "answer": "SELECT ward, COUNT(*) AS patient_count FROM patients GROUP BY ward;",
    "alternatives": [],
    "xp": 25,
    "hint": "集計軸をGROUP BYに書きます。"
  },
  {
    "id": 22,
    "level": "中級",
    "category": "GROUP BY",
    "title": "診療科別平均年齢",
    "prompt": "診療科別平均年齢をavg_ageとして集計してください。",
    "answer": "SELECT dept, AVG(age) AS avg_age FROM patients GROUP BY dept;",
    "alternatives": [],
    "xp": 25,
    "hint": "deptでグループ化します。"
  },
  {
    "id": 23,
    "level": "中級",
    "category": "GROUP BY",
    "title": "病棟別平均在院日数",
    "prompt": "病棟別平均在院日数をavg_daysとして集計してください。",
    "answer": "SELECT ward, AVG(days) AS avg_days FROM patients GROUP BY ward;",
    "alternatives": [],
    "xp": 25,
    "hint": "AVGとGROUP BYを組み合わせます。"
  },
  {
    "id": 24,
    "level": "中級",
    "category": "GROUP BY",
    "title": "入院患者の病棟別集計",
    "prompt": "入院中だけを病棟別に数えてください。",
    "answer": "SELECT ward, COUNT(*) AS patient_count FROM patients WHERE status = '入院中' GROUP BY ward;",
    "alternatives": [],
    "xp": 30,
    "hint": "WHEREはGROUP BYより前です。"
  },
  {
    "id": 25,
    "level": "中級",
    "category": "HAVING",
    "title": "2人以上の病棟",
    "prompt": "患者数が2人以上の病棟を表示してください。",
    "answer": "SELECT ward, COUNT(*) AS patient_count FROM patients GROUP BY ward HAVING COUNT(*) >= 2;",
    "alternatives": [],
    "xp": 30,
    "hint": "集計結果の条件にはHAVINGを使います。"
  },
  {
    "id": 26,
    "level": "中級",
    "category": "HAVING",
    "title": "平均10日以上",
    "prompt": "平均在院日数10日以上の診療科を表示してください。",
    "answer": "SELECT dept, AVG(days) AS avg_days FROM patients GROUP BY dept HAVING AVG(days) >= 10;",
    "alternatives": [],
    "xp": 30,
    "hint": "HAVINGでAVGの結果を絞ります。"
  },
  {
    "id": 27,
    "level": "中級",
    "category": "NULL",
    "title": "NULLを探す",
    "prompt": "退院日がNULLの入院情報を取得してください。",
    "answer": "SELECT * FROM admissions WHERE discharge_date IS NULL;",
    "alternatives": [],
    "xp": 25,
    "hint": "NULLはIS NULLで判定します。"
  },
  {
    "id": 28,
    "level": "中級",
    "category": "NULL",
    "title": "NULL以外",
    "prompt": "退院日がNULLではない入院情報を取得してください。",
    "answer": "SELECT * FROM admissions WHERE discharge_date IS NOT NULL;",
    "alternatives": [],
    "xp": 25,
    "hint": "NULL以外はIS NOT NULLです。"
  },
  {
    "id": 29,
    "level": "中級",
    "category": "NULL",
    "title": "NULL置換",
    "prompt": "退院日がNULLなら入院中と表示してください。",
    "answer": "SELECT admission_id, COALESCE(discharge_date, '入院中') AS discharge_status FROM admissions;",
    "alternatives": [],
    "xp": 30,
    "hint": "COALESCEでNULL時の代替値を指定します。"
  },
  {
    "id": 30,
    "level": "中級",
    "category": "CASE",
    "title": "年齢区分",
    "prompt": "75歳以上、65歳以上、それ以外で年齢区分を作ってください。",
    "answer": "SELECT patient_id, CASE WHEN age >= 75 THEN '後期高齢' WHEN age >= 65 THEN '前期高齢' ELSE '64歳以下' END AS age_group FROM patients;",
    "alternatives": [],
    "xp": 30,
    "hint": "CASEは上から条件を評価します。"
  },
  {
    "id": 31,
    "level": "中級",
    "category": "CASE",
    "title": "在院日数区分",
    "prompt": "14日以上を長期、それ以外を通常と分類してください。",
    "answer": "SELECT patient_id, CASE WHEN days >= 14 THEN '長期' ELSE '通常' END AS stay_type FROM patients;",
    "alternatives": [],
    "xp": 30,
    "hint": "CASE WHENを使います。"
  },
  {
    "id": 32,
    "level": "中級",
    "category": "JOIN",
    "title": "患者と入院情報",
    "prompt": "患者と入院情報をpatient_idで内部結合してください。",
    "answer": "SELECT p.patient_id, p.age, a.admission_date FROM patients p INNER JOIN admissions a ON p.patient_id = a.patient_id;",
    "alternatives": [],
    "xp": 35,
    "hint": "ONに結合条件を書きます。"
  },
  {
    "id": 33,
    "level": "中級",
    "category": "JOIN",
    "title": "患者と診療科",
    "prompt": "患者と診療科をdept_idで結合してください。",
    "answer": "SELECT p.patient_id, d.dept_name FROM patients p INNER JOIN departments d ON p.dept_id = d.dept_id;",
    "alternatives": [],
    "xp": 35,
    "hint": "テーブル別名を使うと読みやすくなります。"
  },
  {
    "id": 34,
    "level": "中級",
    "category": "JOIN",
    "title": "入院歴なしも表示",
    "prompt": "入院歴がない患者も残して表示してください。",
    "answer": "SELECT p.patient_id, a.admission_date FROM patients p LEFT JOIN admissions a ON p.patient_id = a.patient_id;",
    "alternatives": [],
    "xp": 40,
    "hint": "左側を全件残すのはLEFT JOINです。"
  },
  {
    "id": 35,
    "level": "中級",
    "category": "JOIN",
    "title": "施設と区",
    "prompt": "施設と区をarea_idで結合してください。",
    "answer": "SELECT f.facility_name, a.area_name FROM facilities f INNER JOIN areas a ON f.area_id = a.area_id;",
    "alternatives": [],
    "xp": 35,
    "hint": "共通キーarea_idで結びます。"
  },
  {
    "id": 36,
    "level": "中級",
    "category": "文字列関数",
    "title": "氏名連結",
    "prompt": "姓と名を連結しfull_nameとして表示してください。",
    "answer": "SELECT CONCAT(last_name, first_name) AS full_name FROM staff;",
    "alternatives": [
      "SELECT last_name || first_name AS full_name FROM staff"
    ],
    "xp": 25,
    "hint": "CONCATまたは||を使います。"
  },
  {
    "id": 37,
    "level": "中級",
    "category": "文字列関数",
    "title": "文字数",
    "prompt": "施設名とその文字数を表示してください。",
    "answer": "SELECT facility_name, LENGTH(facility_name) AS name_length FROM facilities;",
    "alternatives": [],
    "xp": 25,
    "hint": "文字数はLENGTHです。"
  },
  {
    "id": 38,
    "level": "中級",
    "category": "日付関数",
    "title": "入院年",
    "prompt": "入院日の年をadmission_yearとして表示してください。",
    "answer": "SELECT admission_id, EXTRACT(YEAR FROM admission_date) AS admission_year FROM admissions;",
    "alternatives": [],
    "xp": 30,
    "hint": "EXTRACTで日付要素を取り出します。"
  },
  {
    "id": 39,
    "level": "中級",
    "category": "日付関数",
    "title": "月別入院件数",
    "prompt": "月ごとの入院件数を集計してください。",
    "answer": "SELECT EXTRACT(MONTH FROM admission_date) AS admission_month, COUNT(*) AS admission_count FROM admissions GROUP BY EXTRACT(MONTH FROM admission_date);",
    "alternatives": [],
    "xp": 35,
    "hint": "抽出した月でGROUP BYします。"
  },
  {
    "id": 40,
    "level": "中級",
    "category": "日付関数",
    "title": "日付差",
    "prompt": "退院済み患者の在院日数を日付差で計算してください。",
    "answer": "SELECT admission_id, discharge_date - admission_date AS length_of_stay FROM admissions WHERE discharge_date IS NOT NULL;",
    "alternatives": [],
    "xp": 35,
    "hint": "日付差の書式はDB製品により異なります。"
  },
  {
    "id": 41,
    "level": "上級",
    "category": "サブクエリ",
    "title": "平均以上",
    "prompt": "平均年齢以上の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE age >= (SELECT AVG(age) FROM patients);",
    "alternatives": [],
    "xp": 40,
    "hint": "WHEREの右辺で平均を求めます。"
  },
  {
    "id": 42,
    "level": "上級",
    "category": "サブクエリ",
    "title": "最大在院日数",
    "prompt": "最大在院日数の患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE days = (SELECT MAX(days) FROM patients);",
    "alternatives": [],
    "xp": 40,
    "hint": "サブクエリでMAXを求めます。"
  },
  {
    "id": 43,
    "level": "上級",
    "category": "サブクエリ",
    "title": "入院歴あり",
    "prompt": "入院歴がある患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE patient_id IN (SELECT patient_id FROM admissions);",
    "alternatives": [],
    "xp": 45,
    "hint": "INの候補をサブクエリで作ります。"
  },
  {
    "id": 44,
    "level": "上級",
    "category": "サブクエリ",
    "title": "入院歴なし",
    "prompt": "入院歴がない患者を取得してください。",
    "answer": "SELECT * FROM patients WHERE patient_id NOT IN (SELECT patient_id FROM admissions);",
    "alternatives": [],
    "xp": 45,
    "hint": "NOT INを使います。"
  },
  {
    "id": 45,
    "level": "上級",
    "category": "CTE",
    "title": "高齢患者CTE",
    "prompt": "75歳以上をCTE elderlyにして取得してください。",
    "answer": "WITH elderly AS (SELECT * FROM patients WHERE age >= 75) SELECT * FROM elderly;",
    "alternatives": [],
    "xp": 50,
    "hint": "WITHで一時的な結果名を定義します。"
  },
  {
    "id": 46,
    "level": "上級",
    "category": "CTE",
    "title": "病棟集計CTE",
    "prompt": "病棟別患者数をCTEにして表示してください。",
    "answer": "WITH ward_summary AS (SELECT ward, COUNT(*) AS patient_count FROM patients GROUP BY ward) SELECT * FROM ward_summary;",
    "alternatives": [],
    "xp": 50,
    "hint": "集計結果をCTEにします。"
  },
  {
    "id": 47,
    "level": "上級",
    "category": "ウィンドウ関数",
    "title": "年齢順位",
    "prompt": "年齢の高い順に順位を付けてください。",
    "answer": "SELECT patient_id, age, RANK() OVER (ORDER BY age DESC) AS age_rank FROM patients;",
    "alternatives": [],
    "xp": 55,
    "hint": "RANK() OVERを使います。"
  },
  {
    "id": 48,
    "level": "上級",
    "category": "ウィンドウ関数",
    "title": "病棟内順位",
    "prompt": "病棟ごとに年齢順位を付けてください。",
    "answer": "SELECT patient_id, ward, age, RANK() OVER (PARTITION BY ward ORDER BY age DESC) AS age_rank FROM patients;",
    "alternatives": [],
    "xp": 60,
    "hint": "PARTITION BYで病棟ごとに分けます。"
  },
  {
    "id": 49,
    "level": "上級",
    "category": "ウィンドウ関数",
    "title": "全体比率",
    "prompt": "診療科別患者数と全体比率を表示してください。",
    "answer": "SELECT dept, COUNT(*) AS patient_count, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS patient_ratio FROM patients GROUP BY dept;",
    "alternatives": [],
    "xp": 65,
    "hint": "集計値の合計をウィンドウ関数で求めます。"
  },
  {
    "id": 50,
    "level": "上級",
    "category": "実戦",
    "title": "病棟別入院状況",
    "prompt": "入院中患者について病棟別の患者数、平均年齢、平均在院日数を集計し、患者数の多い順に表示してください。",
    "answer": "SELECT ward, COUNT(*) AS patient_count, AVG(age) AS avg_age, AVG(days) AS avg_days FROM patients WHERE status = '入院中' GROUP BY ward ORDER BY patient_count DESC;",
    "alternatives": [],
    "xp": 100,
    "hint": "WHERE、GROUP BY、ORDER BYを組み合わせます。"
  }
];
