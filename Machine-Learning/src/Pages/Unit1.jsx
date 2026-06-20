import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Code, BarChart3, Download } from 'lucide-react';

const Unit1 = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const sections = [
    {
      id: 'intro',
      title: 'Introduction to Machine Learning & Workflow',
      icon: <BookOpen className="w-5 h-5" />,
      questions: [
        {
          q: "What is Machine Learning?",
          points: [
            "Computer systems learn from data without explicit programming",
            "Identifies patterns and makes predictions automatically",
            "Uses algorithms to improve performance through experience"
          ],
          keywords: "Pattern recognition, Data-driven, Automated learning, Experience-based"
        },
        {
          q: "What is the difference between AI, ML, and DL?",
          points: [
            "AI (Artificial Intelligence): Broad concept of machines mimicking human intelligence",
            "ML (Machine Learning): Subset of AI that learns from data",
            "DL (Deep Learning): Subset of ML using neural networks with multiple layers"
          ],
          keywords: "AI ⊃ ML ⊃ DL (superset relationship)"
        },
        {
          q: "What is the typical Machine Learning workflow?",
          points: [
            "Step 1: Data Collection → Gather relevant datasets",
            "Step 2: Data Preprocessing → Clean, transform, prepare data",
            "Step 3: Model Training → Fit algorithm to training data",
            "Step 4: Model Evaluation → Test on unseen data, tune hyperparameters"
          ],
          keywords: "Collect → Preprocess → Train → Evaluate"
        },
        {
          q: "What is the difference between training and testing?",
          points: [
            "Training: Model learns patterns from training dataset",
            "Testing: Model evaluated on unseen test data to check performance",
            "Training data teaches; testing data validates learning"
          ],
          keywords: "Learn vs Validate, Seen vs Unseen data"
        },
        {
          q: "What is a model, feature, and label?",
          points: [
            "Model: Mathematical algorithm that learns patterns (e.g., decision tree, neural network)",
            "Feature: Input variable/attribute used for prediction (X variables)",
            "Label: Output/target variable to predict (Y variable)"
          ],
          keywords: "Model=Algorithm, Feature=Input, Label=Output"
        },
        {
          q: "What is the difference between prediction and inference?",
          points: [
            "Prediction: Making forecasts on new/unseen data after training",
            "Inference: Drawing conclusions about relationships between features and labels",
            "Prediction focuses on 'what'; inference focuses on 'why'"
          ],
          keywords: "Forecast vs Understand, What vs Why"
        },
        {
          q: "What is generalization in ML?",
          points: [
            "Model's ability to perform well on unseen/new data",
            "Good generalization means model captures true patterns, not noise",
            "Balance between simplicity and complexity"
          ],
          keywords: "Unseen data performance, Pattern vs Noise, Real-world applicability"
        },
        {
          q: "What is overfitting?",
          points: [
            "Model learns training data too well, including noise",
            "Performs excellently on training but poorly on test data",
            "High variance, low bias problem",
            "Solution: Regularization, cross-validation, more data"
          ],
          keywords: "Memorization, High variance, Training↑ Testing↓"
        },
        {
          q: "What is underfitting?",
          points: [
            "Model too simple to capture underlying patterns",
            "Poor performance on both training and test data",
            "High bias, low variance problem",
            "Solution: Increase model complexity, add features"
          ],
          keywords: "Oversimplification, High bias, Training↓ Testing↓"
        },
        {
          q: "Why do ML models fail?",
          points: [
            "Poor data quality: Missing values, outliers, noise, biased data",
            "Insufficient data: Not enough samples for learning",
            "Wrong algorithm: Model doesn't fit problem type",
            "Overfitting/Underfitting: Poor generalization"
          ],
          keywords: "Garbage in-Garbage out, Data quantity/quality, Model mismatch"
        }
      ]
    },
    {
      id: 'types',
      title: 'Types of ML',
      icon: <BarChart3 className="w-5 h-5" />,
      questions: [
        {
          q: "What is supervised learning?",
          points: [
            "Learning from labeled data (input-output pairs)",
            "Algorithm learns mapping function: Y = f(X)",
            "Uses training labels to guide learning process"
          ],
          keywords: "Labeled data, Input-Output mapping, Teacher-guided"
        },
        {
          q: "What is unsupervised learning?",
          points: [
            "Learning from unlabeled data (only inputs, no outputs)",
            "Finds hidden patterns, structures, or groupings",
            "No correct answers provided during training"
          ],
          keywords: "Unlabeled data, Pattern discovery, Self-organized learning"
        },
        {
          q: "What is semi-supervised learning?",
          points: [
            "Combines small labeled dataset with large unlabeled dataset",
            "Uses labeled data to guide learning on unlabeled data",
            "Cost-effective when labeling is expensive"
          ],
          keywords: "Hybrid approach, Small labeled + Large unlabeled, Cost-effective"
        },
        {
          q: "What is reinforcement learning?",
          points: [
            "Agent learns through trial-and-error interactions with environment",
            "Receives rewards/penalties for actions taken",
            "Maximizes cumulative reward over time"
          ],
          keywords: "Agent-Environment, Reward-Penalty, Trial-and-error, Game-playing"
        },
        {
          q: "What is the difference between classification and regression?",
          points: [
            "Classification: Predicts discrete/categorical labels (e.g., spam/not spam)",
            "Regression: Predicts continuous numerical values (e.g., house price)",
            "Classification → Categories; Regression → Numbers"
          ],
          keywords: "Discrete vs Continuous, Categories vs Numbers"
        },
        {
          q: "Give real-world examples of each type of ML",
          points: [
            "Supervised: Email spam detection, house price prediction, disease diagnosis",
            "Unsupervised: Customer segmentation, anomaly detection, recommendation systems",
            "Semi-supervised: Image classification with few labels, speech recognition",
            "Reinforcement: Self-driving cars, game AI, robot control"
          ],
          keywords: "Real-world applications"
        },
        {
          q: "Why do we need unsupervised learning?",
          points: [
            "Labeling data is expensive, time-consuming, and sometimes impossible",
            "Discovers hidden patterns humans might miss",
            "Useful for data exploration and preprocessing"
          ],
          keywords: "No labels needed, Pattern discovery, Cost-effective exploration"
        }
      ]
    },
    {
      id: 'data-types',
      title: 'Structured vs. Unstructured Data',
      icon: <Code className="w-5 h-5" />,
      questions: [
        {
          q: "What is structured data?",
          points: [
            "Organized in fixed format (rows and columns)",
            "Stored in databases/spreadsheets with defined schema",
            "Easy to search, analyze, and process"
          ],
          keywords: "Tabular format, Fixed schema, Database-friendly, Organized"
        },
        {
          q: "What is unstructured data?",
          points: [
            "No predefined format or organization",
            "Includes text, images, audio, video, social media posts",
            "Requires preprocessing before analysis"
          ],
          keywords: "No fixed format, Media files, Raw data, Preprocessing needed"
        },
        {
          q: "Examples of each",
          points: [
            "Structured: Excel spreadsheets, SQL databases, CSV files, sensor readings",
            "Unstructured: Emails, social media posts, images, videos, audio recordings",
            "Semi-structured: JSON, XML (hybrid between both)"
          ],
          keywords: "Tabular vs Media"
        },
        {
          q: "Which ML algorithms work best with structured data?",
          points: [
            "Traditional ML: Decision Trees, Random Forest, SVM, Logistic Regression",
            "Gradient Boosting: XGBoost, LightGBM, CatBoost",
            "Linear models and tree-based models excel with tabular data"
          ],
          keywords: "Tree-based models, Traditional ML, Tabular data specialists"
        },
        {
          q: "What challenges arise with unstructured data?",
          points: [
            "Requires complex preprocessing (feature extraction, transformation)",
            "High dimensionality and computational cost",
            "Needs specialized algorithms (CNNs for images, RNNs for text)"
          ],
          keywords: "Complex preprocessing, High dimensions, Deep learning needed"
        }
      ]
    },
    {
      id: 'pandas',
      title: 'Data Loading – Pandas',
      icon: <Code className="w-5 h-5" />,
      questions: [
        {
          q: "How do you load a CSV file using pandas?",
          points: [
            "import pandas as pd",
            "df = pd.read_csv('filename.csv')"
          ],
          keywords: "pd.read_csv(), Import pandas, DataFrame creation",
          code: "import pandas as pd\ndf = pd.read_csv('filename.csv')"
        },
        {
          q: "What are DataFrame and Series?",
          points: [
            "DataFrame: 2D labeled data structure (table with rows and columns)",
            "Series: 1D labeled array (single column or row)",
            "DataFrame = Collection of Series"
          ],
          keywords: "DataFrame=Table, Series=Column, 2D vs 1D"
        },
        {
          q: "How do you view first/last rows of a dataset?",
          points: [
            "df.head() - First 5 rows (default)",
            "df.tail() - Last 5 rows",
            "df.head(10) - First 10 rows"
          ],
          keywords: "head(), tail(), Quick preview",
          code: "df.head()     # First 5 rows\ndf.tail()     # Last 5 rows\ndf.head(10)   # First 10 rows"
        },
        {
          q: "How to check data types in pandas?",
          points: [
            "df.dtypes - Data types of all columns",
            "df.info() - Comprehensive information",
            "df.describe() - Statistical summary"
          ],
          keywords: "dtypes, info(), describe()",
          code: "df.dtypes\ndf.info()\ndf.describe()"
        },
        {
          q: "How to select specific columns or rows?",
          points: [
            "df['column_name'] - Single column",
            "df[['col1', 'col2']] - Multiple columns",
            "df.iloc[0] - First row by position",
            "df.loc[0] - Row by index label"
          ],
          keywords: "iloc (position), loc (label), Indexing, Slicing",
          code: "df['column_name']\ndf[['col1', 'col2']]\ndf.iloc[0:5, 0:3]"
        }
      ]
    },
    {
      id: 'cleaning',
      title: 'Data Cleaning',
      icon: <Code className="w-5 h-5" />,
      questions: [
        {
          q: "What are missing values?",
          points: [
            "Empty/null entries in dataset (NaN, None, NULL)",
            "Occur due to data collection errors, non-response, or corruption",
            "Can bias model performance if not handled"
          ],
          keywords: "NaN, Null, Empty cells, Data gaps"
        },
        {
          q: "How do you handle missing values?",
          points: [
            "df.isnull().sum() - Count missing values",
            "df.dropna() - Remove rows with missing values",
            "df.fillna(value) - Fill with specific value",
            "df.fillna(df.mean()) - Fill with mean"
          ],
          keywords: "dropna(), fillna(), Detect and treat",
          code: "df.isnull().sum()\ndf.dropna()\ndf.fillna(df.mean())"
        },
        {
          q: "What is imputation?",
          points: [
            "Replacing missing values with substituted values",
            "Methods: Mean, median, mode, forward-fill, backward-fill",
            "Preserves dataset size unlike deletion"
          ],
          keywords: "Replace missing, Statistical substitution, Data preservation",
          formula: "Mean = Σx/n, Median = Middle value"
        },
        {
          q: "What are outliers?",
          points: [
            "Data points significantly different from other observations",
            "Lie far from central tendency (mean/median)",
            "Can be errors or genuine extreme values"
          ],
          keywords: "Extreme values, Anomalies, Statistical deviations"
        },
        {
          q: "How do you detect outliers?",
          points: [
            "IQR Method: Values < Q1 - 1.5×IQR or > Q3 + 1.5×IQR",
            "Z-score: |z| > 3 where z = (x - μ)/σ",
            "Visualization: Boxplots, scatter plots"
          ],
          keywords: "IQR method, Z-score, Boxplot, Statistical boundaries",
          formula: "IQR = Q3 - Q1, Z-score = (x - μ)/σ"
        },
        {
          q: "How do you treat outliers?",
          points: [
            "Remove: Delete outlier rows",
            "Cap: Replace with boundary values (winsorization)",
            "Transform: Log transformation, square root",
            "Keep: If genuine extreme values"
          ],
          keywords: "Remove/Cap/Transform, Context-dependent, Winsorization"
        },
        {
          q: "What are duplicates?",
          points: [
            "Identical rows appearing multiple times in dataset",
            "Occur due to data entry errors or merging issues",
            "Can bias analysis and model training"
          ],
          keywords: "Repeated rows, Data redundancy, Duplicate records"
        },
        {
          q: "How do you remove duplicates in pandas?",
          points: [
            "df.duplicated().sum() - Count duplicates",
            "df.drop_duplicates() - Remove all duplicates",
            "df.drop_duplicates(subset=['col1']) - Based on specific column"
          ],
          keywords: "drop_duplicates(), duplicated(), Subset parameter",
          code: "df.duplicated().sum()\ndf.drop_duplicates()"
        },
        {
          q: "Why is data cleaning important?",
          points: [
            "Garbage In, Garbage Out: Poor data quality → Poor model performance",
            "Improves model accuracy and reliability",
            "Removes noise, inconsistencies, and biases"
          ],
          keywords: "GIGO principle, Quality assurance, Model foundation"
        }
      ]
    },
    {
      id: 'eda',
      title: 'EDA (Exploratory Data Analysis)',
      icon: <BarChart3 className="w-5 h-5" />,
      questions: [
        {
          q: "What is exploratory data analysis (EDA)?",
          points: [
            "Initial investigation to understand data characteristics",
            "Discover patterns, anomalies, relationships, and distributions",
            "Uses statistical methods and visualizations"
          ],
          keywords: "Data understanding, Pattern discovery, Pre-modeling analysis"
        },
        {
          q: "What are summary statistics?",
          points: [
            "Central tendency: Mean, median, mode",
            "Dispersion: Standard deviation, variance, range",
            "Shape: Skewness, kurtosis"
          ],
          keywords: "Descriptive statistics, Central tendency, Spread measures",
          formula: "Mean = Σx/n, SD = √(Σ(x-μ)²/n)"
        },
        {
          q: "What is correlation?",
          points: [
            "Statistical measure of relationship between two variables",
            "Ranges from -1 (perfect negative) to +1 (perfect positive)",
            "0 indicates no linear relationship"
          ],
          keywords: "Linear relationship, -1 to +1 range, Pearson coefficient",
          formula: "r = Σ((x-x̄)(y-ȳ)) / √(Σ(x-x̄)²Σ(y-ȳ)²)"
        },
        {
          q: "What does a correlation heatmap represent?",
          points: [
            "Visual matrix showing correlation between all variable pairs",
            "Color intensity indicates correlation strength",
            "Helps identify multicollinearity and feature relationships"
          ],
          keywords: "Color-coded matrix, Feature relationships, Visual correlation"
        },
        {
          q: "How do you detect relationships in data?",
          points: [
            "Correlation analysis: Pearson, Spearman coefficients",
            "Scatter plots: Visual relationship between two variables",
            "Pair plots: Multiple scatter plots in grid format",
            "Statistical tests: Chi-square, ANOVA"
          ],
          keywords: "Correlation matrix, Scatter plots, Statistical tests"
        }
      ]
    },
    {
      id: 'viz',
      title: 'Data Visualization',
      icon: <BarChart3 className="w-5 h-5" />,
      questions: [
        {
          q: "What is Matplotlib?",
          points: [
            "Low-level Python plotting library for creating static visualizations",
            "Provides fine control over plot customization",
            "Foundation for other plotting libraries"
          ],
          keywords: "Basic plotting, Fine control, Static graphs, Foundation library"
        },
        {
          q: "What is Seaborn?",
          points: [
            "High-level statistical visualization library built on Matplotlib",
            "Provides attractive default styles and color palettes",
            "Simplifies complex statistical plots"
          ],
          keywords: "Statistical plots, Beautiful defaults, High-level, Matplotlib-based"
        },
        {
          q: "Difference between both?",
          points: [
            "Matplotlib: Low-level, detailed control, verbose syntax",
            "Seaborn: High-level, simpler syntax, statistical focus, better aesthetics",
            "Seaborn uses Matplotlib under the hood"
          ],
          keywords: "Low-level vs High-level, Control vs Simplicity"
        },
        {
          q: "What types of graphs are used for categorical/numerical variables?",
          points: [
            "Categorical: Bar chart, count plot, pie chart, box plot (by category)",
            "Numerical: Histogram, density plot, line plot, scatter plot",
            "Both: Box plot, violin plot (numerical split by categorical)"
          ],
          keywords: "Bar for categorical, Histogram for numerical, Distribution analysis"
        },
        {
          q: "What is a boxplot used for?",
          points: [
            "Displays distribution through quartiles (Q1, median, Q3)",
            "Shows outliers as individual points beyond whiskers",
            "Components: Box (IQR), Whiskers (1.5×IQR), Median line"
          ],
          keywords: "Quartiles, Outlier detection, Five-number summary, IQR visualization"
        },
        {
          q: "What is a histogram used for?",
          points: [
            "Shows frequency distribution of numerical variable",
            "Divides data into bins and counts observations per bin",
            "Reveals distribution shape (normal, skewed, bimodal)"
          ],
          keywords: "Frequency distribution, Bins, Shape analysis, Continuous data"
        },
        {
          q: "What is a scatter plot used for?",
          points: [
            "Shows relationship between two numerical variables",
            "Each point represents one observation with (x, y) coordinates",
            "Helps identify correlation, trends, and outliers"
          ],
          keywords: "Two-variable relationship, Correlation visualization, Point plot"
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleQuestion = (sectionId, questionIndex) => {
    const key = `${sectionId}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    const allExpanded = {};
    sections.forEach(section => {
      allExpanded[section.id] = true;
      section.questions.forEach((_, idx) => {
        allExpanded[`${section.id}-${idx}`] = true;
      });
    });
    setExpandedSections(allExpanded);
    setExpandedQuestions(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSections({});
    setExpandedQuestions({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Machine Learning Study Guide</h1>
          <p className="text-blue-100">Unit 1 - Foundations of Machine Learning</p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {section.questions.length} questions
                  </span>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>

              {/* Questions */}
              {expandedSections[section.id] && (
                <div className="p-6 space-y-4 bg-gray-50">
                  {section.questions.map((question, idx) => {
                    const questionKey = `${section.id}-${idx}`;
                    const isExpanded = expandedQuestions[questionKey];

                    return (
                      <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(section.id, idx)}
                          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </span>
                            <span className="text-left font-semibold text-gray-800">{question.q}</span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-5 pb-5 space-y-4">
                            {/* Points */}
                            <div className="space-y-2">
                              {question.points.map((point, pIdx) => (
                                <div key={pIdx} className="flex gap-3">
                                  <span className="text-blue-600 mt-1">•</span>
                                  <p className="text-gray-700 leading-relaxed">{point}</p>
                                </div>
                              ))}
                            </div>

                            {/* Formula */}
                            {question.formula && (
                              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-purple-700 font-semibold text-sm">📐 Formula:</span>
                                </div>
                                <code className="text-purple-900 font-mono text-sm">{question.formula}</code>
                              </div>
                            )}

                            {/* Code */}
                            {question.code && (
                              <div className="bg-gray-900 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Code className="w-4 h-4 text-green-400" />
                                  <span className="text-green-400 font-semibold text-sm">Code:</span>
                                </div>
                                <pre className="text-green-300 font-mono text-sm overflow-x-auto">
                                  {question.code}
                                </pre>
                              </div>
                            )}

                            {/* Keywords */}
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-orange-700 font-semibold text-sm">🔑 Keywords:</span>
                              </div>
                              <p className="text-orange-900 font-medium">{question.keywords}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="font-medium">Total: {sections.reduce((acc, s) => acc + s.questions.length, 0)} Questions Covered</p>
          <p className="text-sm mt-2">Click any question to expand and view detailed answers</p>
        </div>
      </div>
    </div>
  );
};

export default Unit1;