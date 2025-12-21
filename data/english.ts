
import { GradeCurriculum } from '../types';

export const ENGLISH_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'personal-responsibility',
        name: 'Personal Responsibility',
        subStrands: [
          {
            id: 'conversational-skills',
            name: 'Conversational Skills',
            lessons: [
              { id: 'cs-1', name: 'Self-introduction and polite language' },
              { id: 'cs-2', name: 'Polite language in dialogue' },
              { id: 'cs-3', name: 'Introducing others politely' },
              { id: 'cs-4', name: 'Practicing introductions (Game)' }
            ]
          },
          {
            id: 'independent-reading',
            name: 'Independent Reading',
            lessons: [
              { id: 'ir-1', name: 'Selecting reading materials and reference skills' },
              { id: 'ir-2', name: 'Reading dialogue and answering questions' }
            ]
          },
          {
            id: 'nouns',
            name: 'Word Classes: Nouns',
            lessons: [
              { id: 'n-1', name: 'Proper and Common Nouns' },
              { id: 'n-2', name: 'Abstract and Concrete Nouns' },
              { id: 'n-3', name: 'Using nouns in conversation and puzzles' }
            ]
          },
          {
            id: 'trickster-narratives',
            name: 'Trickster Narratives',
            lessons: [
              { id: 'tn-1', name: 'Reading Trickster Narratives (King Lion Resigns)' }
            ]
          },
          {
            id: 'handwriting',
            name: 'Handwriting',
            lessons: [
              { id: 'hw-1', name: 'Legibility and Neatness' }
            ]
          }
        ]
      },
      {
        id: 'science-health',
        name: 'Science and Health Education',
        subStrands: [
          {
            id: 'oral-presentation',
            name: 'Oral Presentation',
            lessons: [
              { id: 'op-1', name: 'Features of Oral Narratives (Greedy Hyena)' },
              { id: 'op-2', name: 'Making oral narratives interesting' },
              { id: 'op-3', name: 'Performing oral narratives' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Reading simple poems (Structure)' },
              { id: 'sp-2', name: 'Reciting poems' }
            ]
          },
          {
            id: 'nouns-count',
            name: 'Word Classes: Nouns',
            lessons: [
              { id: 'nc-1', name: 'Count and Non-count Nouns' },
              { id: 'nc-2', name: 'Using Count and Non-count Nouns' },
              { id: 'nc-3', name: 'Singular and Plural Nouns' }
            ]
          },
          {
            id: 'class-readers',
            name: 'Class Readers',
            lessons: [
              { id: 'cr-1', name: 'Introduction to Class Readers' }
            ]
          },
          {
            id: 'punctuation',
            name: 'Punctuation Marks',
            lessons: [
              { id: 'pm-1', name: 'Identifying punctuation marks in dialogue' },
              { id: 'pm-2', name: 'Punctuating sentences' }
            ]
          }
        ]
      },
      {
        id: 'hygiene',
        name: 'Hygiene',
        subStrands: [
          {
            id: 'listening-info',
            name: 'Listening for Information',
            lessons: [
              { id: 'li-1', name: 'Listening for main ideas' },
              { id: 'li-2', name: 'Listening to instructions (Video)' },
              { id: 'li-3', name: 'Reading for main ideas (Passage)' }
            ]
          },
          {
            id: 'reading-info',
            name: 'Reading for Information',
            lessons: [
              { id: 'ri-1', name: 'Reading strategies (Skimming/Scanning)' },
              { id: 'ri-2', name: 'Reading for details (Feet Hygiene)' }
            ]
          },
          {
            id: 'verbs-tense',
            name: 'Word Classes: Verbs',
            lessons: [
              { id: 'vt-1', name: 'Regular and Irregular Verbs' },
              { id: 'vt-2', name: 'Using verbs in sentences' },
              { id: 'vt-3', name: 'Verbs in conversation and games' }
            ]
          },
          {
            id: 'poetry',
            name: 'Poetry',
            lessons: [
              { id: 'po-1', name: 'Reading poetry (I Thank Thee, Mother)' },
              { id: 'po-2', name: 'Features of poetry (Dreams)' }
            ]
          },
          {
            id: 'narrative-paragraph',
            name: 'Narrative Paragraph',
            lessons: [
              { id: 'np-1', name: 'Writing a narrative paragraph' }
            ]
          }
        ]
      },
      {
        id: 'leadership',
        name: 'Leadership',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Specific vs General information' },
              { id: 'lc-2', name: 'Listening for qualities (Class Secretary)' },
              { id: 'lc-3', name: 'Listening for details (Nelson Mandela)' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Identifying main ideas (Gender Roles)' },
              { id: 'ir-2', name: 'Using Mind Maps' },
              { id: 'ir-3', name: 'Reading biographies (Wangari Maathai)' }
            ]
          },
          {
            id: 'verbs-tense-2',
            name: 'Verbs and Tense',
            lessons: [
              { id: 'vt-4', name: 'Present and Past Tense verbs' },
              { id: 'vt-5', name: 'Using present and past tense' }
            ]
          },
          {
            id: 'class-readers-2',
            name: 'Class Readers',
            lessons: [
              { id: 'cr-2', name: 'Character analysis (I am Married)' }
            ]
          },
          {
            id: 'paragraphing',
            name: 'Paragraphing',
            lessons: [
              { id: 'pg-1', name: 'Using examples and incidents' },
              { id: 'pg-2', name: 'Using Mind Maps for paragraphs' }
            ]
          }
        ]
      },
      {
        id: 'family',
        name: 'Family',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Pronunciation',
            lessons: [
              { id: 'pr-1', name: 'Sounds /p/ and /b/' },
              { id: 'pr-2', name: 'Sounds /i/ and /ee/' },
              { id: 'pr-3', name: 'Sound /oat/' }
            ]
          },
          {
            id: 'synonyms-antonyms',
            name: 'Synonyms and Antonyms',
            lessons: [
              { id: 'sa-1', name: 'Introduction to Synonyms and Antonyms' },
              { id: 'sa-2', name: 'Using a Thesaurus' },
              { id: 'sa-3', name: 'Identifying Synonyms and Antonyms in text' }
            ]
          },
          {
            id: 'comparatives',
            name: 'Comparatives and Superlatives',
            lessons: [
              { id: 'cs-1', name: 'Comparative and Superlative Adjectives' },
              { id: 'cs-2', name: 'Using comparatives and superlatives' }
            ]
          },
          {
            id: 'oral-narratives',
            name: 'Oral Narratives: Legends',
            lessons: [
              { id: 'on-1', name: 'Introduction to Legends' },
              { id: 'on-2', name: 'Reading Legends (Mango Saves His Community)' }
            ]
          },
          {
            id: 'friendly-letter',
            name: 'Friendly Letter',
            lessons: [
              { id: 'fl-1', name: 'Parts of a friendly letter' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-8',
    name: 'Grade 8',
    strands: [
      {
        id: 'human-rights',
        name: 'Human Rights',
        subStrands: [
          {
            id: 'polite-language',
            name: 'Listening and Speaking - Polite Language',
            lessons: [
              { id: 'pl-1', name: 'Polite words in telephone conversations' },
              { id: 'pl-2', name: 'Telephone etiquette' }
            ]
          },
          {
            id: 'extensive-reading',
            name: 'Reading - Extensive Reading',
            lessons: [
              { id: 'er-1', name: 'Independent reading strategies' }
            ]
          },
          {
            id: 'compound-nouns',
            name: 'Grammar - Compound Nouns',
            lessons: [
              { id: 'cn-1', name: 'Meaning and examples of compound nouns' },
              { id: 'cn-2', name: 'Using compound nouns in sentences' }
            ]
          },
          {
            id: 'handwriting',
            name: 'Writing - Handwriting',
            lessons: [
              { id: 'hw-1', name: 'Legibility and neatness' }
            ]
          },
          {
            id: 'short-stories',
            name: 'Reading - Short Stories',
            lessons: [
              { id: 'ss-1', name: 'Sequence of events' },
              { id: 'ss-2', name: 'Inferring meaning and answering questions' }
            ]
          }
        ]
      },
      {
        id: 'scientific-innovation',
        name: 'Scientific Innovation',
        subStrands: [
          {
            id: 'collective-nouns',
            name: 'Grammar - Collective Nouns',
            lessons: [
              { id: 'cln-1', name: 'Definition and examples' },
              { id: 'cln-2', name: 'Plurals of collective nouns' }
            ]
          },
          {
            id: 'oral-presentation',
            name: 'Listening and Speaking - Oral Presentation',
            lessons: [
              { id: 'op-1', name: 'Features of songs' },
              { id: 'op-2', name: 'Performance techniques and writing songs' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Reading - Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Identifying persona' },
              { id: 'sp-2', name: 'Repetition and meaning' }
            ]
          },
          {
            id: 'mechanics',
            name: 'Writing - Mechanics (Punctuation)',
            lessons: [
              { id: 'mc-1', name: 'Comma, apostrophe, and capital letters' }
            ]
          },
          {
            id: 'short-story-si',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-3', name: 'Time, place, and setting' }
            ]
          },
          {
            id: 'primary-auxiliaries',
            name: 'Grammar - Primary Auxiliaries',
            lessons: [
              { id: 'pa-1', name: 'Identification and usage' }
            ]
          }
        ]
      },
      {
        id: 'pollution',
        name: 'Pollution',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening and Speaking - Listening Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Main idea and specific information (Cause and Effect)' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Reading - Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Reading skills and answering questions' },
              { id: 'ir-2', name: 'Contextual clues and vocabulary' }
            ]
          },
          {
            id: 'paragraphing',
            name: 'Writing - Paragraphing',
            lessons: [
              { id: 'pr-1', name: 'Sequencing ideas and conjunctions' },
              { id: 'pr-2', name: 'Using conjunctions in paragraphs' }
            ]
          },
          {
            id: 'poetry',
            name: 'Reading - Poetry',
            lessons: [
              { id: 'po-1', name: 'Structure and message' }
            ]
          }
        ]
      },
      {
        id: 'consumer-roles',
        name: 'Consumer Roles and Responsibilities',
        subStrands: [
          {
            id: 'selective-listening',
            name: 'Listening and Speaking - Selective Listening',
            lessons: [
              { id: 'sl-1', name: 'Specific vs General information' }
            ]
          },
          {
            id: 'intensive-reading-cr',
            name: 'Reading - Intensive Reading',
            lessons: [
              { id: 'ir-3', name: 'Reading strategies (Main ideas and details)' }
            ]
          },
          {
            id: 'verbs-tenses',
            name: 'Grammar - Verbs and Tenses',
            lessons: [
              { id: 'vt-1', name: 'Simple present and past tense (Identification)' },
              { id: 'vt-2', name: 'Constructing sentences in present/past tense' }
            ]
          },
          {
            id: 'short-story-cr',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-4', name: 'Characters and character traits' }
            ]
          },
          {
            id: 'paragraphing-cr',
            name: 'Writing - Paragraphing',
            lessons: [
              { id: 'pr-3', name: 'Connectors of sequence (Identification)' },
              { id: 'pr-4', name: 'Using connectors of sequence' }
            ]
          }
        ]
      },
      {
        id: 'relationships-peers',
        name: 'Relationships: Peers',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Listening and Speaking - Pronunciation',
            lessons: [
              { id: 'pn-1', name: 'Sounds /o/ and /th/' },
              { id: 'pn-2', name: 'Emphatic stress' }
            ]
          },
          {
            id: 'adjectives',
            name: 'Grammar - Adjectives',
            lessons: [
              { id: 'adj-1', name: 'Gradable and non-gradable adjectives (Identification)' },
              { id: 'adj-2', name: 'Using adjectives in sentences' }
            ]
          },
          {
            id: 'study-skills',
            name: 'Reading - Study Skills',
            lessons: [
              { id: 'st-1', name: 'Reference materials (Definition and types)' },
              { id: 'st-2', name: 'Using reference materials (Dictionary, Thesaurus)' }
            ]
          },
          {
            id: 'functional-writing',
            name: 'Writing - Functional Writing',
            lessons: [
              { id: 'fw-1', name: 'Apology Letters' }
            ]
          }
        ]
      },
      {
        id: 'rehabilitation',
        name: 'Rehabilitation',
        subStrands: [
          {
            id: 'short-story-rehab',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-5', name: 'Repetition and dialogue' },
              { id: 'ss-6', name: 'Importance of repetition and dialogue' }
            ]
          },
          {
            id: 'conversational-skills',
            name: 'Listening and Speaking - Conversational Skills',
            lessons: [
              { id: 'cs-1', name: 'Disagreeing politely' }
            ]
          },
          {
            id: 'adverbs',
            name: 'Grammar - Adverbs',
            lessons: [
              { id: 'adv-1', name: 'Adverbs of frequency and degree' }
            ]
          },
          {
            id: 'mechanics-writing',
            name: 'Writing - Mechanics of Writing',
            lessons: [
              { id: 'mw-1', name: 'Spelling (Misspelt words, prefixes, suffixes)' },
              { id: 'mw-2', name: 'Silent vowels and affixes' }
            ]
          },
          {
            id: 'reading-fluency',
            name: 'Reading - Reading Fluency',
            lessons: [
              { id: 'rf-1', name: 'Reading speed and expression' }
            ]
          },
          {
            id: 'listening-detail',
            name: 'Listening and Speaking - Listening for Detail',
            lessons: [
              { id: 'ld-1', name: 'Main ideas in listening text' }
            ]
          },
          {
            id: 'pronouns',
            name: 'Grammar - Pronouns',
            lessons: [
              { id: 'pro-1', name: 'Indefinite and reflexive pronouns' }
            ]
          }
        ]
      },
      {
        id: 'wildlife-conservation',
        name: 'Wildlife Conservation',
        subStrands: [
          {
            id: 'short-story-wild',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-7', name: 'Intensive Reading: Short Story (I think it is time)' },
              { id: 'ss-8', name: 'Short Story: Touring the wild (Characters)' }
            ]
          },
          {
            id: 'composition',
            name: 'Writing - Composition',
            lessons: [
              { id: 'wc-1', name: 'Writing a dialogue' }
            ]
          },
          {
            id: 'visuals',
            name: 'Reading - Intensive Reading (Visuals)',
            lessons: [
              { id: 'vis-1', name: 'Interpreting visuals' },
              { id: 'vis-2', name: 'Visuals and written texts connection' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-9',
    name: 'Grade 9',
    strands: [
      {
        id: 'citizenship',
        name: 'Citizenship',
        subStrands: [
          {
            id: 'polite-lang',
            name: 'Listening & Speaking: Polite Language',
            lessons: [
              { id: 'pl-1', name: 'Euphemism: Definition and Usage' },
              { id: 'pl-2', name: 'Conducting a Debate with Politeness' }
            ]
          },
          {
            id: 'independent-reading',
            name: 'Reading: Independent Reading',
            lessons: [
              { id: 'ir-1', name: 'Selecting and Reading Appropriate Texts' }
            ]
          },
          {
            id: 'gender-neutral',
            name: 'Grammar: Gender Neutral Language',
            lessons: [
              { id: 'gn-1', name: 'Identifying Gender Biased Words' },
              { id: 'gn-2', name: 'Using Gender Neutral Words' }
            ]
          },
          {
            id: 'play-structure',
            name: 'Intensive Reading: Play',
            lessons: [
              { id: 'ps-1', name: 'Structure and Setting of a Play' },
              { id: 'ps-2', name: 'Analysing Acts and Scenes' }
            ]
          },
          {
            id: 'legibility',
            name: 'Writing: Legibility and Neatness',
            lessons: [
              { id: 'ln-1', name: 'Indentation and Breaking Words' },
              { id: 'ln-2', name: 'Techniques of Improving Legibility' }
            ]
          }
        ]
      },
      {
        id: 'science-fiction',
        name: 'Science Fiction',
        subStrands: [
          {
            id: 'oral-lit',
            name: 'Listening & Speaking: Oral Literature',
            lessons: [
              { id: 'ol-1', name: 'Characteristics of Short Forms (Riddles, Proverbs)' },
              { id: 'ol-2', name: 'Performing Short Forms' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Intensive Reading: Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Style: Repetition and Rhyme' }
            ]
          },
          {
            id: 'nouns-quantifiers',
            name: 'Grammar: Nouns and Quantifiers',
            lessons: [
              { id: 'nq-1', name: 'Quantifiers with Count/Non-count Nouns' },
              { id: 'nq-2', name: 'Differentiating Count and Non-count Nouns' }
            ]
          },
          {
            id: 'play-plot',
            name: 'Intensive Reading: Play (Plot)',
            lessons: [
              { id: 'pp-1', name: 'Identifying Key Events in a Play' }
            ]
          },
          {
            id: 'punctuation',
            name: 'Writing: Mechanics of Writing',
            lessons: [
              { id: 'pm-1', name: 'Punctuation: Double Quotation and Brackets' }
            ]
          }
        ]
      },
      {
        id: 'env-conservation',
        name: 'Environmental Conservation',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening & Speaking: Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Main Idea and Specific Details' },
              { id: 'lc-2', name: 'Inferring Meaning of Unfamiliar Words' }
            ]
          },
          {
            id: 'reading-info',
            name: 'Reading: Reading for Information',
            lessons: [
              { id: 'ri-1', name: 'Identifying Characters and Events' },
              { id: 'ri-2', name: 'Inferring Meaning from Context' }
            ]
          },
          {
            id: 'modal-aux',
            name: 'Grammar: Modal Auxiliaries',
            lessons: [
              { id: 'ma-1', name: 'Functions of Modal Auxiliaries' },
              { id: 'ma-2', name: 'Using Modal Auxiliaries in Sentences' }
            ]
          },
          {
            id: 'poems-structure',
            name: 'Reading: Poems (Structure)',
            lessons: [
              { id: 'ps-1', name: 'Structure and Personification' },
              { id: 'ps-2', name: 'Creating a Poem' }
            ]
          },
          {
            id: 'paragraph-structure',
            name: 'Writing: Paragraph Structure',
            lessons: [
              { id: 'pg-1', name: 'Characteristics of a Well-Formed Paragraph' },
              { id: 'pg-2', name: 'Creating a Coherent Paragraph' }
            ]
          },
          {
            id: 'selective-listening',
            name: 'Listening & Speaking: Selective Listening',
            lessons: [
              { id: 'sl-1', name: 'Selecting Required Information' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Reading: Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Predicting and Answering Questions' },
              { id: 'ir-2', name: 'Note Taking Skills' }
            ]
          },
          {
            id: 'perfect-aspect',
            name: 'Grammar: Perfect Aspect',
            lessons: [
              { id: 'pa-1', name: 'Present Perfect Aspect' },
              { id: 'pa-2', name: 'Past Perfect Aspect' }
            ]
          },
          {
            id: 'play-characters',
            name: 'Intensive Reading: Play (Characters)',
            lessons: [
              { id: 'pc-1', name: 'Describing Characters' },
              { id: 'pc-2', name: 'Describing Actions of Characters' }
            ]
          },
          {
            id: 'narrative-descriptive',
            name: 'Writing: Narrative/Descriptive',
            lessons: [
              { id: 'nd-1', name: 'Narrative Paragraphs' },
              { id: 'nd-2', name: 'Descriptive Paragraphs' }
            ]
          }
        ]
      },
      {
        id: 'relationships-community',
        name: 'Relationships: Community',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Listening & Speaking: Pronunciation',
            lessons: [
              { id: 'pr-1', name: 'Semi-vowels and Diphthongs' },
              { id: 'pr-2', name: 'Stress on Content and Function Words' }
            ]
          },
          {
            id: 'reference-materials',
            name: 'Reading: Reference Materials',
            lessons: [
              { id: 'rm-1', name: 'Using Dictionary and Thesaurus' },
              { id: 'rm-2', name: 'Research using Encyclopedia' }
            ]
          },
          {
            id: 'adjectives',
            name: 'Grammar: Order of Adjectives',
            lessons: [
              { id: 'adj-1', name: 'Identifying Types of Adjectives' },
              { id: 'adj-2', name: 'Using Correct Order of Adjectives' }
            ]
          },
          {
            id: 'play-style',
            name: 'Reading: Play (Style)',
            lessons: [
              { id: 'pst-1', name: 'Features of Style in a Play' },
              { id: 'pst-2', name: 'Relating Style to Message' }
            ]
          },
          {
            id: 'letter-application',
            name: 'Writing: Letter of Application',
            lessons: [
              { id: 'la-1', name: 'Writing a Letter of Application' }
            ]
          }
        ]
      },
      {
        id: 'leisure-time',
        name: 'Leisure Time',
        subStrands: [
          {
            id: 'conversational-skills',
            name: 'Listening & Speaking: Negotiation',
            lessons: [
              { id: 'cs-1', name: 'Negotiation Skills' }
            ]
          },
          {
            id: 'reading-fluency',
            name: 'Reading: Fluency',
            lessons: [
              { id: 'rf-1', name: 'Ways of Enhancing Fluency' },
              { id: 'rf-2', name: 'Reading with Speed and Expression' }
            ]
          },
          {
            id: 'adverbs-comparison',
            name: 'Grammar: Comparison of Adverbs',
            lessons: [
              { id: 'adv-1', name: 'Degrees of Comparison' },
              { id: 'adv-2', name: 'Using Adverbs in Sentences' }
            ]
          },
          {
            id: 'play-themes',
            name: 'Reading: Play (Themes)',
            lessons: [
              { id: 'pt-1', name: 'Identifying Themes in a Play' },
              { id: 'pt-2', name: 'Relating Themes to Real Life' }
            ]
          },
          {
            id: 'spelling',
            name: 'Writing: Spelling',
            lessons: [
              { id: 'sp-1', name: 'Homonyms and Homophones' },
              { id: 'sp-2', name: 'Double Consonants and Vowels' }
            ]
          }
        ]
      }
    ]
  }
];
