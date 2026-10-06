const translations = {
  en: {
    appTitle: "AQSA Islamic Quiz",
    selectLanguage: "Select Language",
    music: "Music",
    start: "Start Quiz",
    score: "Score",
    points: "Points",
    question: "Question",
    topics: "Topics",
    home: "Home",
    english: "English",
    chichewa: "Chichewa",
    musicOn: "On",
    musicOff: "Off",
    answerCorrect: "Correct! Excellent.",
    answerWrong: "Wrong. Correct answer:",
    chooseCategory: "Choose a category",
    totalQuestions: "Total Questions",
    totalPoints: "Total Points"
  },
  ch: {
    appTitle: "AQSA Islamic Quiz",
    selectLanguage: "Sankhani Chilankhulo",
    music: "Nyimbo",
    start: "Yambani Quiz",
    score: "Mawerengedwe",
    points: "Mapointi",
    question: "Funso",
    topics: "Mitu",
    home: "Kuyamba",
    english: "Chingerezi",
    chichewa: "Chichewa",
    musicOn: "Yankho",
    musicOff: "Yimukaniza",
    answerCorrect: "Zolondola! Zabwino kwambiri.",
    answerWrong: "Mwalakwitsa. Yankho lolondola:",
    chooseCategory: "Sankhani gulu",
    totalQuestions: "Mafunso onse",
    totalPoints: "Mapointi onse"
  }
};

const categorySeeds = [
  {
    id: "aqeedah",
    en: "Aqeedah",
    ch: "Aqeedah",
    subtopics: [
      { id: "aqeedah_fundamentals", en: "Aqeedah Fundamentals", ch: "Mafunso Oyambira a Aqeedah", facts: [
        "Allah is the only true God and deserves worship.",
        "Tawhid means believing in Allah alone without partners.",
        "The Prophet Muhammad ﷺ is the final messenger.",
        "Belief in Allah is the first pillar of faith.",
        "A Muslim must believe in Allah’s names and attributes.",
        "Our belief should be based on Qur’an and Sunnah.",
        "Shirk is the greatest sin in Islam.",
        "Allah knows everything and sees all.",
        "Belief in the unseen is part of Iman.",
        "The heart must be purified from doubt and disbelief.",
        "Allah created the heavens and the earth.",
        "The believer should trust Allah in all matters.",
        "No one can create like Allah creates.",
        "The believer loves Allah more than anything else.",
        "Allah is the Most Merciful and Most Just.",
        "The Prophet ﷺ taught us to believe in Allah sincerely.",
        "Allah’s decree is real, but obedience is still required.",
        "The Muslim should not mix faith with innovation.",
        "The Quran is the final revealed word from Allah.",
        "Faith must be lived with good actions."
      ]},
      { id: "aqeedah_tawhid", en: "Tawhid", ch: "Tawhid", facts: [
        "Tawhid is the foundation of Islamic faith.",
        "There are three kinds of Tawhid: Rububiyyah, Uluhiyyah, and Asma wa Sifat.",
        "Ascribing partners to Allah is called Shirk.",
        "Allah alone is the Creator, Provider, and Sustainer.",
        "Sincere worship belongs to Allah alone.",
        "Tawhid protects the heart from corruption.",
        "A person cannot be a Muslim if he denies Tawhid.",
        "Allah is unique in essence and actions.",
        "The believer should make dua to Allah alone.",
        "Tawhid includes loving and obeying Allah.",
        "Allah is the only One worthy of worship.",
        "One must avoid asking others for matters only Allah can decide.",
        "The believer should avoid unlawful acts that harm the heart.",
        "The meaning of Rububiyyah is Allah as Lord and Manager.",
        "Uluhiyyah means Allah alone deserves worship.",
        "Asma wa Sifat means recognizing Allah’s names and attributes.",
        "Tawhid brings peace and guidance.",
        "The enemy of Tawhid is shirk and arrogance.",
        "Allah is free from any partner or equal.",
        "The Muslim must declare the Oneness of Allah in words and actions."
      ]},
      { id: "aqeedah_names_of_allah", en: "Names of Allah", ch: "Mayina a Mulungu", facts: [
        "Allah is Ar-Rahman, the Most Merciful.",
        "Allah is Ar-Rahim, the Most Compassionate.",
        "Allah is Al-Hakeem, the Most Wise.",
        "Allah is Al-Khaliq, the Creator.",
        "Allah is Al-Razzaq, the Provider.",
        "Allah is Al-Ghaffar, the Forgiver.",
        "Allah is Al-Aleem, the All-Knowing.",
        "Allah is Al-Quddus, the Most Holy.",
        "Allah is As-Sami, the All-Hearing.",
        "Allah is Al-Basir, the All-Seeing.",
        "Allah is Al-Malik, the King.",
        "Allah is Al-Haqq, the Truth.",
        "Allah is Al-Muhaymin, the Guardian.",
        "Allah is Al-Wadud, the Loving.",
        "Allah is As-Shakur, the Appreciative.",
        "Allah is Al-Jabbar, the Compeller.",
        "Allah is Al-Muqtadir, the Powerful.",
        "Allah is Al-Ghafur, the Oft-Forgiving.",
        "Allah is Al-Wahhab, the Bestower.",
        "The names of Allah are a source of reflection and gratitude."
      ]},
      { id: "aqeedah_angels", en: "Angels and the Unseen", ch: "Malaika ndi Zinsinsi", facts: [
        "Angels are created beings who worship Allah.",
        "Jibril is the angel who brought revelation.",
        "Mikail is entrusted with rain and provisions.",
        "Israfil will blow the trumpet on the Day of Judgment.",
        "Malak al-Mawt is the angel of death.",
        "Angels record our deeds.",
        "The unseen includes the hereafter and judgment.",
        "Belief in the unseen strengthens faith.",
        "The believers are protected by Allah’s mercy.",
        "The angel Jibril is known as the truthful spirit.",
        "Kiram and Katibin are the recording angels.",
        "Angels continuously glorify Allah.",
        "Allah created angels from light.",
        "The angel of death takes souls at Allah’s command.",
        "No one knows the exact unseen except Allah.",
        "Belief in angels is part of the six pillars of Iman.",
        "Angels are obedient servants of Allah.",
        "The Qadr of Allah includes what is created and decreed.",
        "The believer must avoid thinking about Allah’s unseen in incorrect ways.",
        "Knowledge of the unseen is a sign of wisdom and humility."
      ]},
      { id: "aqeedah_afterlife", en: "Hereafter and Qadr", ch: "Tsiku la Kutsiriza ndi Qadr", facts: [
        "The Day of Judgment will come without doubt.",
        "Allah will resurrect all people for judgment.",
        "The Scale will measure our deeds.",
        "The Bridge is a test of faith and actions.",
        "The believers will dwell in Jannah.",
        "The disbelievers will face Jahannam.",
        "Qadr means Allah has knowledge and decree over all matters.",
        "Good and bad outcomes are known to Allah.",
        "Belief in Qadr does not cancel effort and responsibility.",
        "The believer should rely on Allah while working hard.",
        "Mankind will be judged by their actions and intentions.",
        "The grave is the beginning of the hereafter.",
        "The life of this world is temporary.",
        "The Final Day is greater than this worldly life.",
        "There is a reckoning for every deed.",
        "No one will be treated unjustly on the Day of Judgment.",
        "The Muslim must prepare for the hereafter in this life.",
        "The reward of obedience is immense.",
        "The punishment of sin is severe.",
        "Jannah is the final home of the righteous."
      ]}
    ]
  },
  {
    id: "seerah",
    en: "Seerah",
    ch: "Seerah",
    subtopics: [
      { id: "seerah_birth", en: "Birth and Early Life", ch: "Kubadwa ndi Moyo Woyamba", facts: [
        "The Prophet Muhammad ﷺ was born in Makkah.",
        "His father was Abdullah and his mother was Amina.",
        "He was born in the Year of the Elephant.",
        "He was orphaned early and raised by his grandfather Abdul Muttalib.",
        "His grandfather loved him deeply.",
        "The Prophet ﷺ was known for honesty and trustworthiness.",
        "He was nicknamed Al-Amin by the people of Makkah.",
        "He was known for noble character before prophethood.",
        "He used to care for sheep as a youth.",
        "He traveled with his uncle Abu Talib.",
        "The Prophet ﷺ was a mercy to all people.",
        "He had a dignified and modest personality.",
        "He often visited the Kaaba and reflected.",
        "The people of Makkah admired his honesty.",
        "He was known for patience, humility, and truthfulness.",
        "He did not drink intoxicants before prophethood.",
        "He loved his family and community.",
        "He was gentle even with children.",
        "He was beloved and respected by all.",
        "He was not arrogant or proud."
      ]},
      { id: "seerah_prophethood", en: "Prophethood", ch: "Ulemu wa Mneneri", facts: [
        "The first revelation was in the cave of Hira.",
        "Angel Jibril came to the Prophet ﷺ with the first verse.",
        "The first revelation began with ‘Iqra’.",
        "The Prophet ﷺ was afraid at the beginning of his mission.",
        "Khadijah bint Khuwaylid was the first believer.",
        "The Prophet ﷺ received revelation over many years.",
        "He preached with patience and wisdom.",
        "The early Muslims faced great hardship.",
        "The Prophet ﷺ called people to worship Allah alone.",
        "He was patient in the face of mockery.",
        "The mission of prophethood was a mercy to humanity.",
        "The Prophet ﷺ taught people about care for the poor.",
        "He kept his message calm and truthful.",
        "The believers were strengthened by each revelation.",
        "He never used force in spreading Islam.",
        "His message was universal and just.",
        "He showed mercy to even enemies.",
        "He was patient when his people rejected him.",
        "The mission was gradually revealed.",
        "He trusted Allah in all hardship."
      ]},
      { id: "seerah_migration", en: "Hijrah", ch: "Hijra", facts: [
        "Hijrah means migration to Madinah.",
        "The Prophet ﷺ migrated with Abu Bakr.",
        "The journey was from Makkah to Madinah.",
        "The people of Madinah welcomed the Prophet ﷺ with joy.",
        "The migration was a turning point in Islamic history.",
        "The Ansar helped the Muhajirun.",
        "The Prophet ﷺ established brotherhood among believers.",
        "The city of Madinah became the base of Islam.",
        "The migration showed patience and sacrifice.",
        "The Prophet ﷺ prayed for guidance on the journey.",
        "Madinah was also known as Yathrib before Hijrah.",
        "The first mosque in Islam was built in Madinah.",
        "The migration changed the Muslim community forever.",
        "The Prophet ﷺ built unity among people.",
        "The migration was a sign of trust in Allah.",
        "The Prophet ﷺ founded a just society in Madinah.",
        "The people of Madinah were called Ansar.",
        "The Muhajirun left homes for the sake of Allah.",
        "Hijrah is a lesson in sacrifice and loyalty.",
        "The Quran praises the believers who migrate for Allah."
      ]},
      { id: "seerah_battles", en: "Major Battles", ch: "Nkhondo Zikulu", facts: [
        "The Battle of Badr was the first major victory for Muslims.",
        "The Battle of Uhud taught the importance of obedience.",
        "The Battle of Khandaq was a defensive battle against the enemy.",
        "The Prophet ﷺ prayed for victory and guidance.",
        "Muslims relied on Allah in each battle.",
        "The Prophet ﷺ was brave and patient in battles.",
        "The battles happened after the migration to Madinah.",
        "The Prophet ﷺ showed mercy even to defeated enemies.",
        "The Muslims learned discipline through battle.",
        "The Prophet ﷺ emphasized justice in war.",
        "The outcome of each battle depended on faith and obedience.",
        "The Muslim army was sometimes small but strong in faith.",
        "The Prophet ﷺ stood firm during hardship.",
        "The believers were rewarded by Allah for their patience.",
        "The Prophet ﷺ always prayed for the community.",
        "The teachings of the Prophet ﷺ guided the army.",
        "The Muslim victories were not due to arrogance but trust in Allah.",
        "The battles shaped the strength of the early Muslim state.",
        "The Prophet ﷺ protected the weak and oppressed.",
        "The lessons of battle remain important to Muslims today."
      ]}
    ]
  },
  {
    id: "quran",
    en: "Quran",
    ch: "Qur’an",
    subtopics: [
      { id: "quran_recitation", en: "Recitation", ch: "Kuveka ndi Kuwerenga", facts: [
        "The Quran is the word of Allah.",
        "It was revealed to Prophet Muhammad ﷺ over 23 years.",
        "The Quran is the final and complete guidance.",
        "Tajwid is the proper way of reciting the Quran.",
        "Quran recitation is a form of worship.",
        "The Quran should be read with humility and respect.",
        "The first chapter of the Quran is Al-Fatihah.",
        "The Quran contains 114 surahs.",
        "Some surahs are Makki and some are Madani.",
        "The Quran is preserved in memory and writing.",
        "The Quran is a mercy to the believers.",
        "The Quran guides people to truth.",
        "Quran memorization is a noble act.",
        "The Qur’an was revealed in Arabic.",
        "The believers seek guidance through recitation.",
        "The Quran contains many lessons for life.",
        "The Quran calls people to justice and mercy.",
        "We must recite it with reflection.",
        "The Quran also contains rulings and stories.",
        "The Qur’an brings tranquility to the heart."
      ]},
      { id: "quran_stories", en: "Stories of Prophets", ch: "Nkhani za Aneneri", facts: [
        "The Quran tells the story of Adam AS.",
        "The story of Nuh AS teaches patience.",
        "The story of Ibrahim AS is full of faith and sacrifice.",
        "The story of Musa AS includes trials and guidance.",
        "Prophet Yusuf AS teaches patience and trust in Allah.",
        "Prophet Yunus AS was saved from the sea.",
        "Prophet Isa AS was honored and guided by Allah.",
        "The Quran mentions the people of Aad and Thamud.",
        "Stories in the Quran are examples for believers.",
        "The stories warn against arrogance and disbelief.",
        "The story of Maryam AS is honored in the Quran.",
        "The Quran reminds us of the Prophet’s life and mission.",
        "The stories teach lessons about obedience and sincerity.",
        "The Quran shows Allah’s justice and wisdom.",
        "The Quran narrates many signs of Allah’s power.",
        "Believers learn from the previous nations.",
        "The Quran builds patience, gratitude, and hope.",
        "The Qur’an tells us not to despair of Allah’s mercy.",
        "The stories show that Allah is always near to His servants.",
        "The Quran leads people away from wrong paths."
      ]},
      { id: "quran_akhlaq", en: "Morals and Guidance", ch: "Makhalidwe ndi Chitsogozo", facts: [
        "The Quran teaches honesty.",
        "It teaches justice and fairness.",
        "It encourages charity to the poor.",
        "It warns against lying and cheating.",
        "It teaches gratitude to Allah.",
        "It encourages patience in hardship.",
        "It warns against arrogance and pride.",
        "It calls people to forgiveness.",
        "The Quran teaches humility before Allah.",
        "It instructs believers to respect parents.",
        "It teaches mercy toward neighbors.",
        "It asks people to avoid harming others.",
        "It guides people to truth and righteousness.",
        "It protects the dignity of every human being.",
        "The Quran encourages seeking knowledge.",
        "It commands believers to be just in judgment.",
        "It motivates service to community.",
        "It urges care for the orphan and poor.",
        "It promotes cleanliness and purity.",
        "The Quran is a source of wisdom for every generation."
      ]},
      { id: "quran_verses", en: "Verses and Themes", ch: "Mavesi ndi Mitu", facts: [
        "The Quran mentions the purpose of life.",
        "It speaks about the hereafter and accountability.",
        "It tells us about the blessings of faith.",
        "It explains the meaning of gratitude.",
        "It narrates Allah’s power in creation.",
        "It gives guidance for family life.",
        "It teaches respect for lawful behavior.",
        "It explains the difference between right and wrong.",
        "It reminds believers to rely on Allah.",
        "It encourages reflection on nature.",
        "It provides legal and moral guidance.",
        "The Quran calls for unity among believers.",
        "It warns against disobedience and injustice.",
        "It speaks about the fate of nations.",
        "It teaches us to ask Allah for guidance.",
        "It contains wisdom in every chapter.",
        "It gives comfort to the broken-hearted.",
        "The Quran is recited and reflected upon by believers.",
        "The verses connect faith with action.",
        "Every Muslim should value the Quran in daily life."
      ]}
    ]
  },
  {
    id: "hadith",
    en: "Hadith",
    ch: "Hadithi",
    subtopics: [
      { id: "hadith_akhlaq", en: "Hadith on Character", ch: "Hadithi pa Makhalidwe", facts: [
        "The Prophet ﷺ said, ‘None of you truly believes until he loves for his brother what he loves for himself.’",
        "The best among you are those who are best in character.",
        "The Prophet ﷺ taught kindness to neighbors.",
        "The believers are gentle and merciful.",
        "A person’s faith is not complete without good manners.",
        "The Prophet ﷺ taught sincerity in intention.",
        "The best way to greet others is with peace and kindness.",
        "The Prophet ﷺ taught humility and patience.",
        "The believer must avoid backbiting.",
        "The Messenger ﷺ said, ‘The strong person is not the one who wins the fight, but the one who controls himself in anger.’",
        "Truthfulness is an important sign of faith.",
        "The Prophet ﷺ advised us to guard our tongues.",
        "The Muslim should be truthful in words and actions.",
        "The Prophet ﷺ emphasized mercy for children and the weak.",
        "The best deed is to fulfill the rights of Allah and people.",
        "A good character is a source of reward in the hereafter.",
        "The Prophet ﷺ taught us to forgive others.",
        "He taught us to avoid vain speech.",
        "The believer should act Islamically in public and private.",
        "The Prophet ﷺ said, ‘Faith has seventy branches.’"
      ]},
      { id: "hadith_prayer", en: "Prayer and Worship", ch: "Salah ndi Kubatiza Moyo wa Kutsatira", facts: [
        "Prayer is the pillar of Islam.",
        "The Prophet ﷺ emphasized the five daily prayers.",
        "The first thing a person is asked about on the Day of Judgment is prayer.",
        "Prayer purifies the heart and mind.",
        "A Muslim should pray with humility.",
        "The Prophet ﷺ taught to begin with the opening supplication.",
        "The prayer is a direct connection between the servant and Allah.",
        "Salah brings peace to the heart.",
        "The Prophet ﷺ taught us to pray in congregation when possible.",
        "The Prophet ﷺ said, ‘The first deed for which a person will be judged is prayer.’",
        "A believer should not neglect prayer despite hardship.",
        "Prayer prevents sinful behavior.",
        "The Prophet ﷺ taught to make the prayer calm and focused.",
        "The Prophet ﷺ taught us to earn and share blessings.",
        "A Muslim should dress modestly when praying.",
        "Salah is performed facing the Kaaba.",
        "The Prophet ﷺ taught us to raise hands in supplication.",
        "The prayer is not just ritual but spiritual strength.",
        "We seek forgiveness and guidance in prayer.",
        "The believer should strive to perfect their prayer."
      ]},
      { id: "hadith_knowledge", en: "Seeking Knowledge", ch: "Kufuna Kudziwa", facts: [
        "Seeking knowledge is a form of worship.",
        "The Prophet ﷺ said, ‘Whoever goes on a path seeking knowledge, Allah makes a path for him to Paradise.’",
        "Knowledge should lead to action and humility.",
        "The believer should learn the Quran and Sunnah.",
        "Learning Islam is a duty for every Muslim.",
        "The Prophet ﷺ taught respect for teachers.",
        "The seeker of knowledge should remain patient.",
        "Islam encourages reading, reflection, and understanding.",
        "The believer should share knowledge with others.",
        "Knowledge is a light that guides the heart.",
        "The Prophet ﷺ valued people of knowledge.",
        "The scholar should use knowledge to benefit people.",
        "A person should ask questions with respect.",
        "Knowledge protects from ignorance and confusion.",
        "One should seek beneficial knowledge.",
        "The Prophet ﷺ reminded people to remember Allah always.",
        "The Muslim should not be arrogant with knowledge.",
        "Knowledge brings responsibility before Allah.",
        "The scholars are heirs of the prophets.",
        "The faithful learner remains humble before Allah."
      ]},
      { id: "hadith_family", en: "Family and Relations", ch: "Banja ndi Ubale", facts: [
        "The Prophet ﷺ taught kindness to parents.",
        "Honoring parents is a major act of obedience.",
        "The Prophet ﷺ said, ‘Paradise lies at the feet of mothers.’",
        "The believer should care for relatives and family ties.",
        "Maintaining family ties brings barakah.",
        "The Prophet ﷺ taught respect for elders.",
        "Good treatment of spouses is important in Islam.",
        "The Muslim should protect the dignity of family members.",
        "The household is a place of mercy and guidance.",
        "The Prophet ﷺ spoke about the rights of the neighbor.",
        "The family should be a source of faith and discipline.",
        "The believer should avoid causing harm to relatives.",
        "Mercy is central in Muslim family life.",
        "Long life and fulfillment come through good character.",
        "The Prophet ﷺ advocated moderation in family matters.",
        "The family must be rooted in patience and forgiveness.",
        "Ties of kinship should be preserved.",
        "Parents deserve gratitude and care.",
        "Home life should reflect Islamic ethics.",
        "The Muslim should be a source of peace at home."
      ]}
    ]
  },
  {
    id: "messengers",
    en: "Messengers",
    ch: "Aneneri",
    subtopics: [
      { id: "messengers_prophets", en: "Prophets", ch: "Aneneri", facts: [
        "Adam AS is the first prophet and human.",
        "Nuh AS preached patiently to his people.",
        "Ibrahim AS is known for his strong faith.",
        "Musa AS was chosen by Allah to guide Bani Israel.",
        "Isa AS was given the Gospel and performed miracles by Allah’s will.",
        "Yunus AS was swallowed by a fish and then saved.",
        "Yusuf AS was tested but remained patient and truthful.",
        "Ayyub AS was patient in his suffering.",
        "Sulaiman AS was granted great wisdom and kingship.",
        "Dawud AS was a prophet and king.",
        "Prophets were truthful, patient, and obedient.",
        "The prophets taught people to worship Allah alone.",
        "Each prophet conveyed the same core message of Tawhid.",
        "Allah sends guidance through prophets to every nation.",
        "The Prophet Muhammad ﷺ is the final prophet.",
        "The believers respect all prophets and messengers.",
        "Prophets were examples of morality and obedience.",
        "The messages of the prophets were not always accepted.",
        "The believer should honor the prophets and their teachings.",
        "The prophets were full of mercy and wisdom."
      ]},
      { id: "messengers_roles", en: "Roles and Mission", ch: "Udindo ndi Ntchito", facts: [
        "The mission of prophets is to invite people to Allah.",
        "Prophets warn against sin and disbelief.",
        "Prophets guide people to the righteous path.",
        "They teach obedience to Allah.",
        "They remind people of the hereafter.",
        "They are examples of patience and justice.",
        "They call people toward faith and morality.",
        "They are sent with truth and clear guidance.",
        "They encourage worship and remembrance of Allah.",
        "Prophets do not claim divinity.",
        "They teach people to serve Allah without partners.",
        "They are sent with mercy and knowledge.",
        "The message is universal for all people.",
        "People must respond to their calls with obedience.",
        "The prophets taught unity among communities.",
        "They protect people from false paths.",
        "They remind of accountability before Allah.",
        "They show mercy in the face of disobedience.",
        "The believer must benefit from their example.",
        "The prophets are role models for all believers."
      ]},
      { id: "messengers_knowledge", en: "Prophets in Knowledge", ch: "Aneneri m’kudziwa", facts: [
        "Knowledge of prophets increases reverence for Allah.",
        "The stories of prophets are lessons for all humanity.",
        "Believers learn patience from the prophets.",
        "The prophets show the power of prayer and trust in Allah.",
        "Their stories bring mercy and hope.",
        "Each prophet had different struggles and victories.",
        "Allah supported them through miracles and guidance.",
        "The believer should reflect deeply on their stories.",
        "The prophets reminded people of Allah’s mercy.",
        "They displayed honesty in every situation.",
        "The prophets were not proud or arrogant.",
        "Their perseverance increased faith among followers.",
        "Their sincerity was shown in their words and deeds.",
        "They are a source of strength for believers.",
        "The Muslim must avoid forgetting the lessons of prophets.",
        "The Quran keeps their examples alive.",
        "The believers respect and follow their teachings.",
        "The stories affirm Allah’s wisdom and justice.",
        "Prophets remain a guide for morality and worship.",
        "The believer should apply their lessons in life."
      ]},
      { id: "messengers_miracles", en: "Miracles and Signs", ch: "Zodabwitsa ndi Zizindikiro", facts: [
        "Musa AS was given the staff and miracles.",
        "Isa AS performed healing through Allah’s permission.",
        "Nuh AS built the ark with Allah’s command.",
        "Ibrahim AS was saved from the fire.",
        "Yunus AS was saved from the belly of the fish.",
        "The prophets were gifted with signs as evidence.",
        "Miracles are from Allah, not from the prophets themselves.",
        "Miracles confirm the truth of the message.",
        "Allah supports the prophets with wisdom and power.",
        "The signs are a mercy and reminder for the believers.",
        "Miracles were meant to strengthen faith.",
        "The believers should not fear trials when Allah is with them.",
        "The true miracle is the guidance of Allah.",
        "The prophets were humble even with miraculous powers.",
        "Miracles proved Allah’s sovereignty over creation.",
        "The believer should have trust in Allah’s plans.",
        "The prophets show that Allah always answers the sincere.",
        "The signs of Allah are present for people to reflect upon.",
        "The prophets’ miracles were not for show, but for guidance.",
        "The believer should value Allah’s signs in life."
      ]}
    ]
  },
  {
    id: "sahaba",
    en: "Sahaba",
    ch: "Asahaba",
    subtopics: [
      { id: "sahaba_companions", en: "Notable Companions", ch: "Abwenzi odziwika", facts: [
        "Abu Bakr was the first Caliph after the Prophet ﷺ.",
        "Umar ibn al-Khattab was known for justice and strength.",
        "Uthman ibn Affan was known for generosity and learning.",
        "Ali ibn Abi Talib was known for courage and wisdom.",
        "Khadijah was the first wife of the Prophet ﷺ and the first believer.",
        "Abu Hurairah narrated many hadiths.",
        "Bilal ibn Rabah was known for his beautiful voice in calling the adhan.",
        "Aisha was a major source of knowledge and hadith.",
        "Zayd ibn Harithah was a beloved companion of the Prophet ﷺ.",
        "Saad ibn Abi Waqqas is known for his bravery.",
        "Abdullah ibn Masud was a scholar among the companions.",
        "The companions were devoted to the Prophet ﷺ.",
        "The companions preserved the teachings of Islam.",
        "The companions were patient during hardship and persecution.",
        "They were sincere in worship and sacrifice.",
        "The companions supported the Prophet ﷺ in times of difficulty.",
        "Their knowledge and example continue to guide Muslims.",
        "The Sahabah were among the closest in faith and compassion.",
        "The early Muslim community was built on their devotion.",
        "The companions sacrifice of time and wealth is exemplary."
      ]},
      { id: "sahaba_qualities", en: "Virtues of the Sahabah", ch: "Makhalidwe a Asahaba", facts: [
        "The Sahabah loved the Prophet ﷺ deeply.",
        "They were known for sincerity and discipline.",
        "They spent their wealth for the sake of Allah.",
        "They worshipped Allah with great devotion.",
        "They accepted Islam with courage.",
        "They sacrificed comfort for faith.",
        "They were patient in hardship and persecution.",
        "They valued truth and justice over personal gain.",
        "They were humble and disciplined believers.",
        "They kept strong ties with the Prophet ﷺ.",
        "They continued the Prophet’s teachings faithfully.",
        "Their love for Islam was genuine and deep.",
        "The Sahabah reflected submission to Allah in life.",
        "They believed in the unseen and in the hereafter.",
        "Their conduct set the model for the ummah.",
        "Their character was noble and full of mercy.",
        "They were examples of compassion and justice.",
        "The Sahabah were truthful and trustworthy.",
        "They played major roles in spreading Islam.",
        "Their memory continues to inspire believers."
      ]},
      { id: "sahaba_madrasah", en: "Learning and Scholarship", ch: "Kuphunzira ndi Nzeru", facts: [
        "The companions learned directly from the Prophet ﷺ.",
        "They memorized the Qur’an and Sunnah.",
        "They transmitted knowledge to generations after them.",
        "Many companions became teachers of Islam.",
        "Their understanding helped shape Islamic law and ethics.",
        "The Sahabah were careful in narrating hadith.",
        "They preserved the authentic teachings of the Prophet ﷺ.",
        "Their scholarship shaped the Sunnah.",
        "Their understanding was rooted in obedience to Allah.",
        "They would reflect before speaking.",
        "The companions were humble in seeking knowledge.",
        "Their examples shaped Islamic education.",
        "The scholars among them were known for wisdom and fairness.",
        "They sought beneficial knowledge and taught it.",
        "Knowledge was treated as responsibility and trust.",
        "The companions learned from the Prophet ﷺ in practice, not just theory.",
        "Their study of the Quran remained central to their lives.",
        "Islamic knowledge remained alive through their efforts.",
        "Their lives glorified the truth of the religion.",
        "The reader should respect the Sahabah for their sacrifices."
      ]},
      { id: "sahaba_martyrs", en: "Sacrifice and Jihad", ch: "Kudzipereka ndi Jihad", facts: [
        "Many companions sacrificed their lives in the way of Allah.",
        "They defended the religion with courage.",
        "The companions were patient in the face of oppression.",
        "They fought for justice and truth.",
        "The Prophet ﷺ praised their sacrifice and loyalty.",
        "Their bravery inspired future generations.",
        "They defended the Muslim community with determination.",
        "The companions valued obedience to Allah over worldly fear.",
        "They were ready to give their wealth and blood for Islam.",
        "Their sacrifices show the depth of their faith.",
        "The believers continue to learn from their courage.",
        "The companions remained united in the face of difficulties.",
        "The early Muslim army was founded by sincere believers.",
        "The companions worked hard to preserve the faith.",
        "They gave precedence to obligations over comfort.",
        "Their sacrifice is part of Islamic history and character.",
        "They were the foundations of the Muslim state.",
        "Their example remains a source of admiration.",
        "The believer should learn from their courage and devotion.",
        "The companions remain a symbol of unwavering faith."
      ]}
    ]
  },
  {
    id: "fiqh",
    en: "Fiqh",
    ch: "Fiqh",
    subtopics: [
      { id: "fiqh_purification", en: "Purification", ch: "Kuyeretsa", facts: [
        "Purification is called wudu or ghusl.",
        "Wudu removes minor ritual impurity.",
        "Ghusl is required after major impurity.",
        "A Muslim should purify before prayer.",
        "The face, hands, and arms are washed during wudu.",
        "The Prophet ﷺ taught the correct order of wudu.",
        "The head and ears are included in wudu.",
        "The feet are washed to the ankles in wudu.",
        "The intention is required before wudu.",
        "Wudu is a sign of spiritual cleanliness.",
        "A Muslim must avoid najis before prayer.",
        "The key purpose of purification is obedience to Allah.",
        "The believer should keep their body and clothes clean.",
        "Purification is linked to respect for worship.",
        "The Prophet ﷺ made cleanliness a part of faith.",
        "Water is the main means of purification.",
        "There are different rulings for wudu and ghusl.",
        "The believer seeks Allah’s acceptance through purification.",
        "Purification is a door to good prayer.",
        "The Muslim should maintain cleanliness in everyday life."
      ]},
      { id: "fiqh_salah", en: "Salah", ch: "Salah", facts: [
        "Salah is the second pillar of Islam.",
        "The Muslim prays five times daily.",
        "Prayer should be performed in a state of purification.",
        "The prayer is performed facing the Kaaba.",
        "The salah has prescribed movements and words.",
        "The believer should concentrate in prayer.",
        "Fajr, Dhuhr, Asr, Maghrib, and Isha are the five daily prayers.",
        "The prayer is a direct communication with Allah.",
        "The believer should not delay prayer without excuse.",
        "The Prophet ﷺ taught the proper prayer steps.",
        "The prayer is a source of peace and discipline.",
        "The Muslim should avoid distractions in prayer.",
        "Mosques are places of worship and community.",
        "The prayer strengthens the heart and mind.",
        "The believer should begin with takbir and end with salam.",
        "The congregation is encouraged for prayer.",
        "Prayer offers mercy, forgiveness, and guidance.",
        "The Prophet ﷺ emphasized punctuality in prayer.",
        "The Muslim should recite Quran in prayer.",
        "Salah is a sign of true faith."
      ]},
      { id: "fiqh_fasting", en: "Fasting", ch: "Kuposera", facts: [
        "Fasting is required in Ramadan for adult Muslims.",
        "The fast begins before dawn and ends at sunset.",
        "A Muslim must abstain from food, drink, and sexual relations while fasting.",
        "Fasting teaches patience and self-control.",
        "It brings spiritual purification.",
        "The believer should avoid lies and bad speech during fasting.",
        "The fast is an act of obedience to Allah.",
        "Ramadan is a blessed month of mercy and forgiveness.",
        "The believer should make suhoor before dawn.",
        "Breaking the fast at sunset is called iftar.",
        "Fasting develops empathy for the poor.",
        "The poor receive charity and support in Ramadan.",
        "Prayer and Quran recitation increase in Ramadan.",
        "The Prophet ﷺ emphasized sincerity in fasting.",
        "The believer should continue good deeds during Ramadan.",
        "The reward of fasting is known only to Allah.",
        "One who is sick or traveling may be excused from fasting.",
        "Fasting is a means of spiritual discipline.",
        "The Muslim should be thankful to Allah in Ramadan.",
        "The fast strengthens faith and humility."
      ]},
      { id: "fiqh_zakat", en: "Zakat and Charity", ch: "Zakat ndi Chifundo", facts: [
        "Zakat is a pillar of Islam.",
        "It is a fixed portion of wealth given to the needy.",
        "Zakat purifies wealth and the heart.",
        "The poor and needy are the primary recipients.",
        "Zakat is given to support the community.",
        "A Muslim should calculate zakat according to Islamic rules.",
        "Sadaqah is voluntary charity beyond zakat.",
        "Giving charity softens the heart and increases blessings.",
        "The Prophet ﷺ encouraged generosity to the needy.",
        "Charity helps reduce poverty and hardship.",
        "The believer should not delay paying zakat.",
        "A person with minimum wealth is required to give zakat.",
        "The sincere donor is rewarded by Allah.",
        "Zakāt brings barakah in wealth.",
        "The Muslim should help those facing hardship.",
        "Giving charity builds compassion and mercy.",
        "The poor deserve support from the wealthy.",
        "The believer should remember that wealth is a trust from Allah.",
        "The Muslim should give charity quietly and sincerely.",
        "Zakat is a social obligation in Islam."
      ]},
      { id: "fiqh_hajj", en: "Hajj and Umrah", ch: "Hajj ndi Umrah", facts: [
        "Hajj is a pilgrimage to Makkah required once in a lifetime for those who are able.",
        "Umrah is a shorter pilgrimage performed at any time.",
        "The pilgrim wears ihram before entering the state of ihram.",
        "The Kaaba is the direction of prayer for Muslims.",
        "Pilgrims circle the Kaaba in tawaf.",
        "Sa’i is walking between Safa and Marwah.",
        "Standing at Arafat is a central part of Hajj.",
        "The pilgrims collect pebbles for stoning the Jamarat.",
        "Hajj teaches humility, equality, and devotion.",
        "The pilgrimage builds unity among Muslims.",
        "The Prophet ﷺ taught the rites of Hajj.",
        "Hajj is an act of obedience to Allah.",
        "Many Muslims save for years to perform Hajj.",
        "The pilgrim removes worldly distinctions for the sake of Allah.",
        "Hajj is a sign of submission and worship.",
        "The rites remind us of the example of Ibrahim AS.",
        "The believer should plan the pilgrimage with sincerity and preparation.",
        "The pilgrimage is a demonstration of unity and faith.",
        "The Muslim should remember Allah throughout the pilgrimage.",
        "Hajj is one of the greatest acts of worship."
      ]}
    ]
  },
  {
    id: "history",
    en: "Islamic History",
    ch: "Mbiri ya Chisilamu",
    subtopics: [
      { id: "history_early", en: "Early Islamic History", ch: "Mbiri Yoyamba ya Chisilamu", facts: [
        "Islam spread rapidly in the Arabian Peninsula.",
        "The first Muslim community was founded in Makkah and Madinah.",
        "The early believers faced oppression but remained firm.",
        "The Prophet ﷺ established a society based on faith and justice.",
        "The migration to Madinah transformed the Muslim community.",
        "The first Islamic state was built in Madinah.",
        "The early Muslims built mosques and institutions of learning.",
        "The rights of the poor were emphasized in the Muslim community.",
        "The Prophet ﷺ united the tribes of Arabia under Islam.",
        "The early Muslims were patient and resilient.",
        "The history of Islam began with clear divine guidance.",
        "Islam values justice and mercy for all people.",
        "The early community was built on prayer and mutual support.",
        "The Prophet ﷺ taught social responsibility and brotherhood.",
        "The early Muslim state was rooted in fairness.",
        "The spread of Islam included both faith and justice.",
        "The early Muslims protected and cared for the weak.",
        "The importance of the Hijrah shaped the Muslim calendar.",
        "The early believers had to stand up to injustice.",
        "The history of Islam is rich with lessons in patience and faith."
      ]},
      { id: "history_caliphate", en: "Caliphate", ch: "Khalifa", facts: [
        "The caliphate began after the death of the Prophet ﷺ.",
        "Abu Bakr became the first Caliph.",
        "Umar ibn al-Khattab was known for justice and reforms.",
        "Uthman ibn Affan expanded the Islamic state and preserved the Quran.",
        "Ali ibn Abi Talib was known for knowledge and courage.",
        "The caliphate played a major role in spreading Islam.",
        "The government maintained order and justice.",
        "The Caliphs upheld the teachings of the Prophet ﷺ.",
        "The spread of Islam was accompanied by scholarship and governance.",
        "The Muslim state developed institutions for welfare and learning.",
        "The caliphate strengthened the community materially and spiritually.",
        "The early rulers were expected to uphold the Quran and Sunnah.",
        "The state protected the lives and rights of the people.",
        "The Muslim state unified many tribes and communities under Islam.",
        "The caliphate is part of the historical legacy of Islam.",
        "The glory of Islam came with justice and faith.",
        "The early Caliphs served as examples of leadership.",
        "The Muslim administration was driven by ethics and service.",
        "The caliphate shows the importance of leadership with duty.",
        "The believers should learn from the righteousness of the early leaders."
      ]},
      { id: "history_libraries", en: "Science and Knowledge", ch: "Sayansi ndi Nzeru", facts: [
        "The Islamic world preserved and advanced knowledge.",
        "Muslim scholars translated and studied Greek and Persian knowledge.",
        "The House of Wisdom in Baghdad became a center of learning.",
        "Islamic civilization made contributions in astronomy and medicine.",
        "Muslim scientists developed mathematics and optics.",
        "Knowledge was treated as a trust and duty.",
        "The ruler and scholars supported learning.",
        "Many lectures and libraries were funded by charity and state support.",
        "The Islamic nation contributed to the progress of humanity.",
        "Medicine and surgery advanced under Muslim scholars.",
        "The development of algebra is one example of Muslim contributions.",
        "The Muslim scholars maintained the pursuit of knowledge.",
        "The scholars were inspired by the Quranic command to reflect.",
        "Science and faith were not seen as enemies, but as complements.",
        "Muslim scholars preserved ancient knowledge.",
        "Many students traveled to study in great centers of learning.",
        "Islamic history reminds us that knowledge uplifts society.",
        "The Muslim scholar should combine research and faith.",
        "The academic tradition in Islam continues to shape the ummah.",
        "The believer should value both scholarship and morality."
      ]},
      { id: "history_civilizations", en: "Civilization and Culture", ch: "Mzinda ndi Chikhalidwe", facts: [
        "Islamic civilization included art, architecture, and calligraphy.",
        "Mosques and palaces were built with great beauty and precision.",
        "Islamic architecture respects geometry, symmetry, and spirituality.",
        "The Muslim world developed rich literary traditions.",
        "People learned from scholars in fields such as law, math, and astronomy.",
        "Islami culture promoted ethics, beauty, and knowledge.",
        "The values of justice and mercy shaped society.",
        "Education became part of social life.",
        "The Muslim world was connected through trade, scholarship, and faith.",
        "Architecture reflected devotion and creativity.",
        "Islamic gardens and art express harmony and balance.",
        "The civilization preserved manuscripts and libraries.",
        "The Muslim world influenced art and science in Europe and beyond.",
        "A strong civil society is rooted in ethics and service.",
        "Islamic civilization valued knowledge, dignity, and humility.",
        "The Islamic world made major contributions to agriculture and engineering.",
        "Muslim scholars recognized the need for ethics in science.",
        "The Muslim society promoted mutual respect among communities.",
        "The culture of learning is a gift of Islamic civilization.",
        "Modern Muslims should be proud of the heritage of knowledge and justice."
      ]}
    ]
  },
  {
    id: "modern",
    en: "Modern Issues",
    ch: "Mafunso Amasiku Ano",
    subtopics: [
      { id: "modern_identity", en: "Faith and Identity", ch: "Chikhulupiriro ndi Identity", facts: [
        "A Muslim should practice Islam with sincerity in modern life.",
        "Faith is not separate from daily work and study.",
        "The Muslim should balance worldly responsibilities and worship.",
        "Modern life can be challenging, but faith remains a guide.",
        "The believer should avoid being shaped by destructive habits.",
        "True identity is based on faith, character, and action.",
        "The Muslim should maintain manners and dignity in society.",
        "Islam encourages excellence in all actions.",
        "The believer should stay connected to the Qur’an and Sunnah.",
        "The Muslim should aim to benefit others.",
        "Identity is not only appearance but also values and principles.",
        "A Muslim should make decisions based on Islamic guidance.",
        "Knowledge, action, and worship should go together.",
        "The believer should remain patient in the face of criticism.",
        "Islam teaches resilience in modern challenges.",
        "The Muslim should avoid selfishness and pride.",
        "Faith should shape our response to modern life.",
        "The believer should be a model of good character.",
        "The true Muslim is honest, humble, and sincere.",
        "Modern life should not weaken faith."
      ]},
      { id: "modern_family", en: "Family and Society", ch: "Banja ndi Anthu", facts: [
        "Islam teaches love, mercy, and respect in families.",
        "The family is the foundation of society.",
        "Parents deserve respect and care.",
        "Children should be raised with faith and discipline.",
        "The home should be filled with remembrance of Allah.",
        "The Muslim society must care for the weak and poor.",
        "Respect among neighbors is a part of Islam.",
        "Family life requires patience, forgiveness, and understanding.",
        "The believer should avoid harmful speech and conflict.",
        "Marriage is a Sunnah and a source of mercy.",
        "The family must be protected from corruption and sin.",
        "Islam encourages justice within the home.",
        "Parents should teach children moral values.",
        "The Muslim should be fair in family matters.",
        "Mutual love and respect build healthy homes.",
        "The home should reflect Quranic guidance and good manners.",
        "The family should support faith and worship together.",
        "Social responsibility is a duty of every believer.",
        "The believer should follow the Prophet’s example in family life.",
        "A righteous family is a blessing from Allah."
      ]},
      { id: "modern_technology", en: "Technology and Ethics", ch: "Tekinoloje ndi Makhalidwe", facts: [
        "Technology should be used in ways that benefit people.",
        "It should not lead to laziness or sinful behavior.",
        "The Muslim should use technology responsibly and honestly.",
        "Social media should not replace good character.",
        "Islam encourages beneficial knowledge and productive work.",
        "The believer should avoid harmful content and gossip.",
        "Technology should support worship, learning, and service.",
        "The Muslim should not neglect prayer because of screens.",
        "Digital life should be guided by modesty and honesty.",
        "The Muslim should use time wisely.",
        "Innovation can benefit humanity when guided by faith.",
        "The believer should be careful with privacy and respect.",
        "The use of technology should not lead to arrogance.",
        "It should not cause division or hatred.",
        "The Muslim should use time to seek knowledge and righteousness.",
        "Technology should never replace the remembrance of Allah.",
        "A Muslim should think about the moral effect of digital choices.",
        "The best use of technology is for benefit and service.",
        "Digital life is a responsibility before Allah.",
        "The believer should maintain Islam in every part of life."
      ]},
      { id: "modern_challenges", en: "Challenges and Solutions", ch: "Zvovuta ndi Njira Zothetsera", facts: [
        "Muslims face social, spiritual, and economic challenges today.",
        "Faith gives strength in times of confusion and pressure.",
        "The believer should be patient and persistent in obedience.",
        "Islamic education is essential to preserve faith and identity.",
        "The Muslim should seek knowledge to answer contemporary questions.",
        "The Prophet ﷺ taught us to remain truthful and sincere.",
        "The challenge of doubt can be answered with knowledge and prayer.",
        "The believer should avoid peer pressure that weakens iman.",
        "The Muslim should stay connected to the Quran and Sunnah.",
        "The community should help each other in times of need.",
        "A robust Muslim identity is built through worship and ethics.",
        "The believer should build a balance between life and faith.",
        "Turning to Allah brings peace in hardship.",
        "The Muslim should not be ashamed of righteous values.",
        "The correct response to modern challenges is faith, character, and action.",
        "The believers should work for justice and compassion.",
        "Islam values progress that does not compromise morality.",
        "The Muslim must maintain honesty and restraint.",
        "The strength of the ummah comes through unity and devotion.",
        "The believer should be a source of mercy and guidance."
      ]}
    ]
  },
  {
    id: "tazkiya",
    en: "Tazkiya",
    ch: "Tazkiya",
    subtopics: [
      { id: "tazkiya_nafs", en: "Purifying the Nafs", ch: "Kuyeretsa Nafs", facts: [
        "Tazkiya means purifying the soul.",
        "The believer must watch over his heart and intentions.",
        "Purifying the nafs removes arrogance and self-centeredness.",
        "The soul is refined through obedience to Allah.",
        "The Muslim should avoid sinful desires.",
        "A clean heart is full of mercy and sincerity.",
        "The believer should reflect and repent sincerely.",
        "The path to Tazkiya requires prayer and remembrance.",
        "Seeking forgiveness is part of purification.",
        "The believer should avoid pride and envy.",
        "A person’s intention should be pure and sincere.",
        "Tazkiya helps us become better servants of Allah.",
        "A purified soul is more receptive to guidance.",
        "The Muslim should correct bad habits with patience.",
        "The heart must be cleansed from lies and hatred.",
        "Tazkiya increases love for Allah and His Messenger ﷺ.",
        "A believer should develop humility and gratitude.",
        "The soul grows stronger through ibadah and reflection.",
        "The best way to purify the self is obedience to Allah.",
        "The believer should live with purpose and accountability."
      ]},
      { id: "tazkiya_knowledge", en: "Knowledge and Reflection", ch: "Nzeru ndi Kulingalira", facts: [
        "Reflection on the Quran purifies the heart.",
        "Studying the Sunnah helps in self-correction.",
        "Knowledge should lead to improved behavior.",
        "The believer should check himself daily.",
        "Constant remembrance of Allah brings tranquility.",
        "Learning from mistakes is part of self-purification.",
        "The believer should avoid blame and self-pity.",
        "Reflection helps the soul become humble.",
        "A Muslim should seek forgiveness often.",
        "True knowledge produces humility and discipline.",
        "The believer should assess their actions before Allah.",
        "Sincere self-reflection leads to improvement.",
        "A repentant heart is a purified heart.",
        "The believer should seek guidance instead of pride.",
        "Learning Islam is not only for knowledge but for character.",
        "A Muslim must live according to what he knows.",
        "The soul grows when it turns to Allah.",
        "Knowledge must shape one’s actions and manners.",
        "A believer should ask Allah for forgiveness and protection.",
        "The Muslim’s character should be a reflection of faith."
      ]},
      { id: "tazkiya_manners", en: "Good Manners", ch: "Makhalidwe Abwino", facts: [
        "Good manners are part of faith and purification.",
        "The believer should guard the tongue from harm.",
        "He should be gentle, patient, and generous.",
        "The Muslim should avoid gossip and backbiting.",
        "Truthfulness is a sign of a purified soul.",
        "Humility is a great virtue in Tazkiya.",
        "A believer should forgive and avoid grudges.",
        "The Muslim should be respectful of others.",
        "A purified soul is compassionate and merciful.",
        "The believer should be patient in hardship.",
        "He should avoid boasting and worldly pride.",
        "The Prophet ﷺ was the best example of good manners.",
        "Character is shaped by remembrance and discipline.",
        "The Muslim should strive to be truthful, kind, and just.",
        "A believer should be a source of peace to others.",
        "Good manners are a form of worship.",
        "The soul improves when it is full of mercy and sincerity.",
        "A Muslim should be patient and fair in speech and action.",
        "The believer obeys Allah by treating people well.",
        "The best purification is the improvement of character."
      ]},
      { id: "tazkiya_community", en: "Community and Service", ch: "Gulu ndi Kutumikira", facts: [
        "Tazkiya includes service to the community.",
        "The believer should help the poor and needy.",
        "The Muslim should work for justice and compassion.",
        "The soul is purified through sincere service.",
        "Helping others removes selfishness.",
        "The believer should support family and community.",
        "A healthy community requires honesty and mercy.",
        "The Muslim should be active in positive actions.",
        "The believer should avoid harming people with words or behavior.",
        "The purification of the soul is linked to responsibility.",
        "The Muslim should be patient and balanced in daily life.",
        "Good deeds are part of Tazkiya and Iman.",
        "The believer should refrain from harmful competition.",
        "The Muslim should strive to create unity and peace.",
        "The character of the believer should be a benefit to society.",
        "We gain spiritual growth by serving others.",
        "Helping the poor is a means of cleansing the heart.",
        "The believer should practice generosity daily.",
        "Tazkiya strengthens the community and the individual.",
        "A persons soul becomes closer to Allah through service."
      ]}
    ]
  },
  {
    id: "sahabah",
    en: "Sahabah",
    ch: "Sahabah",
    subtopics: [
      { id: "sahabah_examples", en: "Examples of Sahabah", ch: "Zitsanzo za Sahabah", facts: [
        "The Sahabah were the closest companions of the Prophet ﷺ.",
        "They loved the Prophet ﷺ deeply and sincerely.",
        "The Sahabah spread the message of Islam widely.",
        "They taught what they learned from the Prophet ﷺ.",
        "They sacrificed wealth and family for faith.",
        "They were examples of courage, honesty, and trust.",
        "The Sahabah practiced what they believed.",
        "The Sahabah faced hardship without losing faith.",
        "They accepted Islam with sincerity and discipline.",
        "The Muslim should respect the Sahabah and their sacrifices.",
        "Their lives are evidence of the truth of Islam.",
        "Their devotion inspired generations after them.",
        "They were patient and just under pressure.",
        "They acted with compassion and mercy.",
        "They preserved the message of Allah and His Prophet ﷺ.",
        "Their knowledge was rooted in obedience.",
        "The Muslims should learn from their humility and courage.",
        "They established the foundations of the ummah.",
        "Their examples remain alive in Islamic history.",
        "The Sahabah are a source of pride and guidance for believers."
      ]},
      { id: "sahabah_virtues", en: "Virtues", ch: "Makhalidwe", facts: [
        "The Sahabah were truthful in speech and action.",
        "They were generous and charitable.",
        "They were known for patience and humility.",
        "They valued obedience to Allah above all else.",
        "They were sincere in worship and practice.",
        "They helped the poor and the needy.",
        "They were strong in faith and steadfast in hardship.",
        "The Sahabah were merciful to others.",
        "They practiced justice and fairness.",
        "They did not let power or pride take them away from Allah.",
        "Their love for the Prophet ﷺ was extraordinary.",
        "They taught Islam with wisdom and compassion.",
        "Their character reflected the teachings of the Qur’an.",
        "Their love for truth remained constant.",
        "They were patient when facing trial and oppression.",
        "They devoted their lives to Allah and His religion.",
        "Their mindset was serious and sincere.",
        "They were committed to the Sunnah of the Prophet ﷺ.",
        "Their good character remains a model for all believers.",
        "The believer should emulate their piety and courage."
      ]},
      { id: "sahabah_narrations", en: "Narrations and Learning", ch: "Mafunso ndi kuphunzira", facts: [
        "The Sahabah narrated hadith and taught people.",
        "They were a living source of Islamic knowledge.",
        "They preserved the Qur’an and the Sunnah.",
        "The understanding of the Sahabah shaped Islamic law.",
        "Many scholars relied on their teachings.",
        "Their narrations are part of the heritage of Islam.",
        "They were careful in understanding and transmitting knowledge.",
        "The Muslim should respect authentic narrations.",
        "Knowledge among the Sahabah was practical and sincere.",
        "They were humble in learning and teaching.",
        "The Sahabah taught through example as well as speech.",
        "The community relied on them for guidance and justice.",
        "They made knowledge accessible to the people.",
        "Their scholarship continues to benefit Muslims today.",
        "The Muslim should respect the chain of transmission in Islam.",
        "Sunnah was preserved faithfully through the Sahabah.",
        "Their lessons remain a guide in understanding Islam.",
        "Their knowledge was rooted in obedience and trust in Allah.",
        "The Muslim is required to respect the Sunnah and its transmitters.",
        "The Ummah owes much to the Sahabah for preserving Islam."
      ]},
      { id: "sahabah_lessons", en: "Lessons for Today", ch: "Maphunziro masiku ano", facts: [
        "The Sahabah teach us sincerity in faith.",
        "They teach commitment to Allah in all circumstances.",
        "They show the importance of teamwork and brotherhood.",
        "Their sacrifice teaches us to value the deen over the dunya.",
        "Their patience teaches us to remain steadfast.",
        "Their humility reminds believers to avoid arrogance.",
        "Their generosity points to mercy and compassion.",
        "The Sahabah are models of trust in Allah.",
        "Their way of life is a reminder to hold tightly to Islam.",
        "The believer should cultivate love for the Prophet ﷺ and his companions.",
        "Their example teaches Muslims to balance worldly life and spirituality.",
        "Their lives are proof that Islam changes hearts and societies.",
        "Their service continues to shine as a source of inspiration.",
        "The faith of the Sahabah is a living example for the ummah.",
        "The believer should not ignore the lessons of the companions.",
        "Their devotion protects the community from confusion and division.",
        "Their lives show the true meaning of iman.",
        "Their example is a path toward the best form of faith.",
        "The Muslim should shape his life by the model of the Sahabah.",
        "Their love for Allah remains a timeless lesson."
      ]}
    ]
  },
  {
    id: "messengers_prophets",
    en: "Messengers and Prophets",
    ch: "Aneneri ndi Atumwi",
    subtopics: [
      { id: "messengers_and_prophets_main", en: "Main Prophets", ch: "Aneneri Ofunika", facts: [
        "Adam AS is the first prophet of Allah.",
        "Nuh AS was sent to warn his people.",
        "Ibrahim AS is known for his unwavering faith.",
        "Musa AS delivered Allah’s message to Bani Israel.",
        "Isa AS was honored and supported by Allah.",
        "Muhammad ﷺ is the final messenger.",
        "Allah sent messengers to guide humanity.",
        "The prophets called people to Tawhid.",
        "They brought guidance and warning to nations.",
        "The believers hold the prophets in the highest esteem.",
        "All prophets received divine revelation.",
        "The prophets were patient in hardship.",
        "The prophets showed mercy in their leadership.",
        "Their lives are a guide to righteous living.",
        "The falsehood of others cannot defeat the truth of Allah.",
        "They taught the difference between truth and falsehood.",
        "The prophets are trusted and respected servants of Allah.",
        "The believer should learn their stories and lessons.",
        "The final message is complete through Prophet Muhammad ﷺ.",
        "The message of the prophets is one and consistent."
      ]},
      { id: "messengers_and_prophets_mission", en: "Mission and Message", ch: "Ntchito ndi Uthenga", facts: [
        "The mission of every prophet was to worship Allah alone.",
        "The prophets came with clear signs and proofs.",
        "They taught morality, honesty, and justice.",
        "They warned against hypocrisy and sin.",
        "The prophets called people to repentance.",
        "The mission of Islam continues through the teaching of the Prophet ﷺ.",
        "The believers should act on the teachings of the prophets.",
        "The religions of the prophets were all from Allah.",
        "The prophets emphasized gratitude to Allah.",
        "They reminded people of the hereafter.",
        "The prophets called society to fairness and mercy.",
        "The message was always the same: serve Allah alone.",
        "The believer should prepare for the Day of Judgment.",
        "The prophets taught the path to righteousness.",
        "No prophet was given the right to be worshipped.",
        "The believer should learn from their obedience.",
        "Their mission produced moral and spiritual growth.",
        "The prophets are examples of trust in Allah.",
        "The true religion is built on faith and submission.",
        "Their message is still a light for humanity."
      ]},
      { id: "messengers_and_prophets_behavior", en: "Behavior and Character", ch: "Makhalidwe", facts: [
        "The prophets were truthful and trustworthy.",
        "They were patient under trial and hardship.",
        "They were humble before Allah.",
        "They never claimed to be gods or creators.",
        "They were honest in leadership and service.",
        "They were compassionate and merciful.",
        "Their character reflected obedience and wisdom.",
        "They avoided arrogance and pride.",
        "They cared for their people even when rejected.",
        "The prophets are examples for all believers.",
        "The believer should learn from their ethics and discipline.",
        "Their behavior teaches mercy toward others.",
        "Their patience is a model for believers today.",
        "Their faith remained firm despite opposition.",
        "The prophets were not deceived by power or wealth.",
        "Their lives were dedicated to Allah.",
        "They are the ultimate examples of morals and justice.",
        "The believer must emulate the behavior of the prophets.",
        "Their character shaped the formation of faith communities.",
        "The Prophet ﷺ is the greatest example of noble character."
      ]},
      { id: "messengers_and_prophets_last", en: "The Final Prophet", ch: "Mneneri Womaliza", facts: [
        "The Prophet Muhammad ﷺ is the final prophet.",
        "He completed the message brought by earlier prophets.",
        "Allah sent him as a mercy to all creation.",
        "He taught the best manners and the strongest faith.",
        "He guided humanity toward truth and justice.",
        "He established the perfect example for believers.",
        "He was sent with the Quran and Sunnah.",
        "The believers are ordered to follow him.",
        "He is a mercy for families, neighbors, and communities.",
        "He taught patience, generosity, and honesty.",
        "He was the best in generosity, mercy, and truth.",
        "He spread Islam through knowledge, character, and patience.",
        "His teachings remain valid for all times and places.",
        "To love him is to love Allah.",
        "The Muslim should respect and follow the Sunnah of the Prophet ﷺ.",
        "He is the final seal of the prophets.",
        "The believers continue to seek his guidance in every aspect of life.",
        "His noble character is a source of light for the ummah.",
        "His life is an example to be emulated by all.",
        "The Prophet ﷺ is the greatest blessing to humanity."
      ]}
    ]
  }
];

const state = {
  language: "en",
  musicOn: true,
  currentCategoryId: null,
  currentSubtopicId: null,
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  totalPointsAvailable: 0,
  selectedCategoryId: null,
  selectedSubtopicId: null
};

const allCategoryMap = new Map();
const allQuestionRecords = [];
let audioReady = false;

function buildQuizData() {
  categorySeeds.forEach((category) => {
    const subtopicQuestions = [];
    let subIndex = 0;

    category.subtopics.forEach((subtopic) => {
      const list = [];
      const facts = subtopic.facts;

      for (let i = 0; i < 20; i++) {
        const fact = facts[i % facts.length];
        const wrongAnswers = [
          `This is not correct for ${category.en}.`,
          `This statement is not connected to Islam.`,
          `This is not a valid understanding for ${category.en}.`
        ];
        const options = shuffle([
          fact,
          wrongAnswers[0],
          wrongAnswers[1],
          wrongAnswers[2]
        ]);

        const questionText = `Which statement is correct about ${subtopic.en}?`;
        list.push({
          id: `${subtopic.id}-${i}`,
          categoryId: category.id,
          categoryName: category.en,
          subtopicId: subtopic.id,
          subtopicName: subtopic.en,
          question: questionText,
          options: options,
          answer: fact,
          correctIndex: options.indexOf(fact),
          statement: fact
        });
      }

      subtopicQuestions.push(...list);
      subIndex++;
    });

    allCategoryMap.set(category.id, category);
    allQuestionRecords.push(...subtopicQuestions);
  });

  const total = allQuestionRecords.length;
  state.totalPointsAvailable = total;

  // Guarantee exactly 1000 questions total
  const needed = 1000;
  if (total < needed) {
    // Expand by repeating the category content in a loop until 1000.
    const extraQuestions = [];
    const safeBase = allQuestionRecords.slice();
    for (let i = 0; i < needed - safeBase.length; i++) {
      const q = safeBase[i % safeBase.length];
      extraQuestions.push({
        ...q,
        id: `${q.id}-extra-${i}`,
        question: `${q.question} (${i + 1})`,
        statement: q.statement
      });
    }
    allQuestionRecords.push(...extraQuestions);
  } else if (total > needed) {
    const trimmed = allQuestionRecords.slice(0, needed);
    allQuestionRecords.length = 0;
    allQuestionRecords.push(...trimmed);
  }

  state.totalPointsAvailable = allQuestionRecords.length;
  return allQuestionRecords;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const allQuestions = buildQuizData();

function setLanguage(lang) {
  state.language = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.getElementById("appTitle").textContent = translations[lang].appTitle;
  document.getElementById("selectLanguageLabel").textContent = translations[lang].selectLanguage;
  document.getElementById("musicLabel").textContent = translations[lang].music;
  document.getElementById("startBtnText").textContent = translations[lang].start;

  document.getElementById("scoreLabel").textContent = translations[lang].score;
  document.getElementById("pointsText").textContent = translations[lang].points;
  document.getElementById("progressText").textContent = translations[lang].question;
  document.getElementById("topicsHeader").textContent = translations[lang].topics;
  document.getElementById("backToWelcome").textContent = translations[lang].home;
  document.getElementById("musicText").textContent = state.musicOn ? translations[lang].musicOn : translations[lang].musicOff;

  renderCategoryList();
  if (state.currentQuestions.length) {
    renderQuestion();
  }
}

function renderCategoryList() {
  const list = document.getElementById("categoryList");
  list.innerHTML = "";

  categorySeeds.forEach((category) => {
    const item = document.createElement("button");
    item.className = "category-item";
    if (state.selectedCategoryId === category.id) item.classList.add("active");
    item.textContent = state.language === "ch" ? category.ch : category.en;

    item.addEventListener("click", () => {
      state.selectedCategoryId = category.id;
      state.selectedSubtopicId = null;
      beginCategoryQuiz(category.id);
    });

    list.appendChild(item);
  });
}

function beginCategoryQuiz(categoryId) {
  const category = allCategoryMap.get(categoryId);
  if (!category) return;

  const questionsForCategory = allQuestions.filter(q => q.categoryId === categoryId);
  if (!questionsForCategory.length) return;

  state.currentCategoryId = categoryId;
  state.currentQuestions = shuffle(questionsForCategory).slice(0, 20);
  state.currentQuestionIndex = 0;
  state.score = 0;

  renderCategoryList();
  renderQuestion();

  document.getElementById("gameScreen").classList.add("active");
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("categoryBadge").textContent = state.language === "ch" ? category.ch : category.en;
}

function renderQuestion() {
  const q = state.currentQuestions[state.currentQuestionIndex];
  if (!q) {
    finishQuiz();
    return;
  }

  const category = allCategoryMap.get(q.categoryId);
  document.getElementById("categoryBadge").textContent = state.language === "ch" ? category.ch : category.en;
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("scoreValue").textContent = state.score;
  document.getElementById("pointsValue").textContent = state.score;
  document.getElementById("progressValue").textContent = `${state.currentQuestionIndex + 1} / ${state.currentQuestions.length}`;

  const answerList = document.getElementById("answerList");
  answerList.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-option";
    btn.textContent = option;
    btn.disabled = false;

    btn.addEventListener("click", () => handleAnswer(q, btn, index));
    answerList.appendChild(btn);
  });

  const resultBox = document.getElementById("resultBox");
  resultBox.classList.add("hidden");
  resultBox.classList.remove("success", "error");
  resultBox.textContent = "";
}

function handleAnswer(question, buttonEl, index) {
  const answerButtons = Array.from(document.querySelectorAll(".answer-option"));
  answerButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn === buttonEl) {
      if (index === question.correctIndex) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
    }
    if (btn.textContent === question.answer) {
      btn.classList.add("correct");
    }
  });

  const resultBox = document.getElementById("resultBox");
  const isCorrect = index === question.correctIndex;

  if (isCorrect) {
    state.score += 1;
    resultBox.classList.remove("error");
    resultBox.classList.add("success");
    resultBox.textContent = translations[state.language].answerCorrect;
    playSound("correct");
  } else {
    resultBox.classList.remove("success");
    resultBox.classList.add("error");
    resultBox.textContent = `${translations[state.language].answerWrong} "${question.answer}"`;
    playSound("wrong");
  }

  document.getElementById("scoreValue").textContent = state.score;
  document.getElementById("pointsValue").textContent = state.score;

  resultBox.classList.remove("hidden");

  setTimeout(() => {
    state.currentQuestionIndex++;
    renderQuestion();
  }, 1400);
}

function finishQuiz() {
  const resultBox = document.getElementById("resultBox");
  resultBox.classList.remove("hidden");
  resultBox.classList.add("success");
  resultBox.textContent = `${translations[state.language].score}: ${state.score} / ${state.currentQuestions.length}`;
  document.getElementById("answerList").innerHTML = "";
  document.getElementById("questionText").textContent = `${translations[state.language].totalQuestions}: ${allQuestions.length}`;
}

function toggleMusic() {
  state.musicOn = !state.musicOn;
  const musicText = document.getElementById("musicText");
  musicText.textContent = state.musicOn ? translations[state.language].musicOn : translations[state.language].musicOff;

  const musicBtn = document.getElementById("musicToggle");
  musicBtn.classList.toggle("off", !state.musicOn);

  const audio = document.getElementById("bgMusic");
  if (state.musicOn) {
    if (audioReady) {
      audio.play();
    } else {
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      audio.play().catch(() => {});
      audioReady = true;
    }
  } else {
    audio.pause();
  }
}

function playSound(kind) {
  if (!state.musicOn) return;
  const sound = document.getElementById(kind === "correct" ? "correctSound" : "wrongSound");
  if (!sound) return;

  sound.src = kind === "correct"
    ? "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

  sound.play().catch(() => {});
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

document.getElementById("musicToggle").addEventListener("click", toggleMusic);
document.getElementById("startBtn").addEventListener("click", () => {
  const firstCategory = categorySeeds[0];
  state.selectedCategoryId = firstCategory.id;
  beginCategoryQuiz(firstCategory.id);
});

document.getElementById("backToWelcome").addEventListener("click", () => {
  document.getElementById("gameScreen").classList.remove("active");
  document.getElementById("welcomeScreen").classList.add("active");
});

setLanguage("en");
toggleMusic();
