# Welcome to WhisperWrite

WhisperWrite is a powerful tool designed to process audio recordings of any length, surpassing the typical limitations of online APIs. Our tool has been tested with audio files as long as 2 hours, and it performs exceptionally well. Additionally, WhisperWrite can take notes from the audio and provide you with a summary highlighting the main points.

For more information about the project, visit our [Devpost page](https://devpost.com/software/whispwrite).

## Getting Started

Follow these instructions to set up and run WhisperWrite locally on your machine.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/) 3.x and [pip](https://pip.pypa.io/en/stable/)
- [virtualenv](https://virtualenv.pypa.io/en/latest/)
- [Ollama](https://www.ollama.com/) (for LLaMA2 installation)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Aequor29/WhisperWrite
    ```

2. **Navigate to the project directory:**

    ```bash
    cd WhisperWrite/src
    ```

### Setting Up the Frontend

1. **Install dependencies:**

    ```bash
    cd frontend/whisper-write
    npm install
    ```

2. **Start the development server:**

    ```bash
    npm run dev
    ```

### Setting Up the Backend

1. **Navigate to the backend directory and install dependencies:**

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

2. **Set up the Python environment using `virtualenv`:**

    ```bash
    virtualenv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    ```

3. **Install LLaMA2 using Ollama:**

    Follow the instructions on [Ollama's website](https://www.ollama.com/docs/installation) to install LLaMA2.

4. **Start the backend server:**

    ```bash
    uvicorn main:app --reload
    ```

### Notes

- Ensure both the frontend and backend servers are running simultaneously for the full functionality of WhisperWrite.
- The backend server will handle audio processing and provide summaries based on the audio content.

### Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue if you have any suggestions, improvements, or find any bugs.

### License

This project is licensed under the MIT License.

---

Thank you for using WhisperWrite! If you have any questions or need further assistance, please contact us or open an issue on GitHub.
