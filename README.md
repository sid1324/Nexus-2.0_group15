# Nexus 2.0 – AI-Powered Design Assistant

Nexus 2.0 is the upgraded version of the original Nexus platform (Nexus 1.0), featuring a new **Design Assistant** component built with a fine-tuned GPT model. This intelligent assistant streamlines the design workflow by integrating natural language processing for layout generation, component suggestion, and responsive design support.

---

## 🧠 Project Structure

```
Nexus-2.0/
│
├── Design Assistant/               # New in Nexus 2.0
│   ├── Fine_TunedGPT3_5Turbo.ipynb   # Notebook for model training and fine-tuning
│   ├── streamlit_app.py              # Streamlit-based UI for design interaction
│   └── Dataset_Nexus.csv             # Dataset used for fine-tuning the GPT model
│
├── Nexus DS/                        # Original design system (carried over from Nexus 1.0)
│   └── ...                           # Components, tokens, and utilities
│
└── Landing Template/                # Reusable templates from Nexus 1.0
    └── ...
```

---

## 🚀 Features

- **Design Assistant (Nexus 2.0)**
  - Fine-tuned GPT-3.5 Turbo for layout and UI component suggestions.
  - Simple interface via Streamlit to interact with the AI model.
  - Trained on custom design datasets specific to Nexus components.

- **Nexus DS (Design System)**
  - Core system of reusable React components.
  - Consistent design language and tokenized styles.

- **Landing Template**
  - Pre-built responsive landing pages using Nexus DS.
  - Built for fast deployment and testing.

---

## 📦 Requirements

To run the Design Assistant locally:

```bash
pip install -r requirements.txt
```

If `requirements.txt` is not available, install these manually:

```bash
pip install streamlit pandas scikit-learn openai
```

---

## 💡 How to Use

### 1. Training the Model

The notebook `Fine_TunedGPT3_5Turbo.ipynb` contains all the logic for:

- Preprocessing the dataset
- Training/fine-tuning GPT
- Saving models or calling external APIs

Dataset used: `Dataset_Nexus.csv`

---

### 2. Running the App

You can launch the design assistant UI via:

```bash
streamlit run streamlit_app.py
```

This will open a local interface where you can:

- Input design prompts (e.g., "Create a responsive login page with dark mode")
- View suggested component hierarchies
- Export layout descriptions

---

## 📁 Data

- **Dataset_Nexus.csv**: Contains prompt-response pairs and component mappings tailored to UI design tasks for training the GPT model.

---

## 📈 Future Work

- Expand dataset coverage and model scope
- Integrate direct Figma/Framer sync

---

## 🤝 Acknowledgements

- Nexus 1.0 contributors for the DS and templates  
- OpenAI for foundational model APIs  
- Mentors and peers for feedback on design intelligence integration

