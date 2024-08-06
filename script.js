const app = document.getElementById('app');
let currentPage = 'start';
let currentQuestion = 0;

const questions = 4;

let answers = ['', '', '', ''];
let answersOther = ['', '', '', ''];
let answersStar = ['', '', '', ''];

function getButtonClass(option) {
  if (answers[currentQuestion] === option) {
    return 'w-full bg-[#0f513a] text-white py-4 rounded-lg text-xl hover:bg-[#0f513a] text-white font-Noto';
  }
  return 'w-full bg-[#ff668f25] text-[#ff668f] py-4 rounded-lg text-xl hover:bg-gray-300 font-Noto';
}

function getButtonClassStar(option) {
  if (answersStar[currentQuestion] === option) {
    return 'w-[15%] bg-[#0f513a] text-white p-2 rounded-lg text-xl hover:bg-[#0f513a] text-white font-Noto';
  }
  return 'w-[15%] bg-[#ff668f25] text-[#ff668f] p-4 rounded-lg text-xl hover:bg-gray-300 font-Noto';
}

function renderPage() {
  //   console.log('คำตอบ:', answers);
  //   console.log('คำตอบ:', answersStar);
  //   console.log('คำตอบ:', answersOther);
  switch (currentPage) {
    case 'start':
      renderStartPage();
      break;
    case 'start1':
      renderStartPage1();
      break;
    case 'question1':
      renderQuestionPage1();
      break;
    case 'question2':
      renderQuestionPage2();
      break;
    case 'question3':
      renderQuestionPage3();
      break;
    case 'question4':
      renderQuestionPage4();
      break;
    case 'thanks':
      renderThanksPage();
      break;
  }
}

function renderStartPage() {
  /*<div class="flex flex-col h-full p-8">*/
  app.innerHTML = `
         <div class="flex flex-col items-center h-full p-8">
            <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">
       
        

            <h1 class="text-2xl text-center mb-6">ADORA service feedback</h1>

            <p class="text-xl text-center mb-6 text-[#ff668f]">
            We believe that “Exceptional quality of service is the foundation upon which lasting relationships are built."
            <br><br><br>
            Don't worry!!! 
            <br>
            Your identity remains confidential. Your candid feedback empowers us to enhance our service quality sustainably.
            <br><br>
            อย่ากังวล!!! 
            <br>
            ตัวตนของคุณจะถูกเก็บเป็นความลับ ข้อเสนอแนะที่จริงใจของคุณช่วยให้เราปรับปรุงคุณภาพบริการได้อย่างยั่งยืน"
            </p>
            
            <div class="w-full flex justify-center">
            <button onclick="startSurvey()" class="w-full  mb-6 rounded-full max-w-md bg-[#0f513a] text-white py-4 text-2xl  hover:bg-pink-500">Start</button>

            </div>

        </div>
    `;
}

function renderStartPage1() {
  /*<div class="flex flex-col h-full p-8">*/
  app.innerHTML = `
         <div class="flex flex-col items-center h-full p-8">
            <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">


            <h1 class="text-3xl font-bold mb-8 text-center">${'Evaluation criteria เกณฑ์การประเมิน'}</h1>
       
            <p class="text-xl text-center mb-6 text-[#ff668f]">
            "5" = Perfect (no room for improvement) - ดีเยี่ยม
            "4" = Over expectation (still can be better) - ดี
            "3" = Satisfy (as expectation level) - โอเค เฉยๆ
            "2" = Poor (under expectation) - แย่
            "1" = Worst (Urgent for improvement) - แย่มาก
            
            <div class="w-full flex justify-center">
            <button onclick="startSurvey1()" class="w-full  mb-6 rounded-full max-w-md bg-[#0f513a] text-white py-4 text-2xl  hover:bg-pink-500">Start</button>

            </div>

        </div>
    `;
}

function renderQuestionPage1() {
  const progress = ((currentQuestion + 1) / questions) * 100;
  const options = [
    'Hair Removal กำจัดขน',
    'Treatment หัตถการโดยพนักงาน',
    'Virgin Lift กระชับน้องสาว',
    'Procedure หัตถการโดยแพทย์',
    'Surgery ศัลยกรรม',
    'Other อื่นๆ',
  ];

  app.innerHTML = `
          <div class="flex flex-col h-full p-8">
              <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">
              <h2 class="text-xl font-bold mb-8 text-center">${'Type of service? ประเภทบริการ'}</h2>
              <div class="space-y-4 mb-8 flex-grow">
                  ${options
                    .map(
                      (option) => `
                      <button onclick="answerQuestion('${option}')" class="${getButtonClass(
                        option
                      )}">
                          ${option}
                      </button>
                  `
                    )
                    .join('')}
              </div>
              <div class="flex justify-between items-center">
                  ${
                    currentQuestion === 0
                      ? `<button onclick="goToStart()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400">Home</button>`
                      : `<button onclick="previousQuestion()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400" ${
                          currentQuestion === 0 ? 'disabled' : ''
                        }>Previous</button>`
                  }
                  
                  <div class="w-1/2 bg-gray-200 rounded-full h-4">
                      <div class="bg-pink-600 h-4 rounded-full" style="width: ${progress}%"></div>
                  </div>
                  <button onclick="nextQuestion()" class="bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                      ${currentQuestion === questions - 1 ? 'Submit' : 'Next'}
                  </button>
              </div>
          </div>
      `;
}

function renderQuestionPage2() {
  const progress = ((currentQuestion + 1) / questions) * 100;
  const options = [
    'K.Jane คุณเจน',
    'K.Pim คุณพิม',
    'K.Namwaan คุณน้ำหวาน',
    'Other อื่นๆ',
    
  ];

  app.innerHTML = `
            <div class="flex flex-col h-full p-8">
                <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">
                <h2 class="text-xl font-bold mb-8 text-center">${'Staff’s name? ชื่อพนักงาน'}</h2>
                <div class="space-y-4 mb-8 flex-grow">
                    ${options
                      .map(
                        (option) => `
                        <button onclick="answerQuestion('${option}')" class="${getButtonClass(
                          option
                        )}">
                            ${option}
                        </button>
                    `
                      )
                      .join('')}
                    ${
                      answers[currentQuestion].includes('Other')
                        ? `<input value='${answersOther[currentQuestion]}' id="other1" type="text" class="w-full border border-pink-500 rounded-lg px-4 py-4" placeholder="Other"></input>`
                        : ''
                    }
                      
                </div>
                
                <h2 class="text-xl font-bold mb-8 text-center">Rate the Service คะแนนการบริการ</h2>
                <div class="w-full space-y-4 mb-8 flex-grow text-center">
                    ${['1', '2', '3', '4', '5']
                      .map(
                        (option) => `
                        <button onclick="answerQuestionStar('${option}')" class="${getButtonClassStar(
                          option
                        )}">
                            <img src="${option}.png" alt="star" class="">
                        </button>
                    `
                      )
                      .join('')}
                      
                </div>
                <div class="flex justify-between items-center">
                    ${
                      currentQuestion === 0
                        ? `<button onclick="goToStart()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400">Home</button>`
                        : `<button onclick="previousQuestion()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400" ${
                            currentQuestion === 0 ? 'disabled' : ''
                          }>Previous</button>`
                    }
                    
                    <div class="w-1/2 bg-gray-200 rounded-full h-4">
                        <div class="bg-pink-600 h-4 rounded-full" style="width: ${progress}%"></div>
                    </div>
                    ${
                      answers[currentQuestion] == '' ||
                      answersStar[currentQuestion] == ''
                        ? `<button  class=" bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                       Required
                    </button>`
                        : `<button onclick="nextQuestion()"  class=" bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                        ${currentQuestion === questions - 1 ? 'Submit' : 'Next'}
                    </button>`
                    }
                    
                </div>
            </div>
        `;
}

function renderQuestionPage3() {
  const progress = ((currentQuestion + 1) / questions) * 100;
  const options = [
    'Dr.Bow หมอโบว์',
    'Dr.Namcha หมอน้ำชา',
    'Dr.Kay หมอเคย์',

    'Other อื่นๆ',
  ];

  app.innerHTML = `
            <div class="flex flex-col h-full p-8">
                <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">
                <h2 class="text-xl font-bold mb-8 text-center">${'Doctor’s name? ชื่อคุณหมอ'}</h2>
                <div class="space-y-4 mb-8 flex-grow">
                    ${options
                      .map(
                        (option) => `
                        <button onclick="answerQuestion('${option}')" class="${getButtonClass(
                          option
                        )}">
                            ${option}
                        </button>
                    `
                      )
                      .join('')}
                      ${
                        answers[currentQuestion].includes('Other')
                          ? `<input value='${answersOther[currentQuestion]}' id="other2" type="text" class="w-full border border-pink-500 rounded-lg px-4 py-4" placeholder="Other"></input>`
                          : ''
                      }
                </div>
                
                <h2 class="text-xl font-bold mb-8 text-center">Rate the Service คะแนนการบริการ</h2>
                <div class="w-full space-y-4 mb-8 flex-grow text-center">
                    ${['1', '2', '3', '4', '5']
                      .map(
                        (option) => `
                        <button onclick="answerQuestionStar('${option}')" class="${getButtonClassStar(
                          option
                        )}">
                            <img src="${option}.png" alt="star" class="">
                        </button>
                    `
                      )
                      .join('')}
                </div>
                <div class="flex justify-between items-center">
                    ${
                      currentQuestion === 0
                        ? `<button onclick="goToStart()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400">Home</button>`
                        : `<button onclick="previousQuestion()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400" ${
                            currentQuestion === 0 ? 'disabled' : ''
                          }>Previous</button>`
                    }
                    
                    <div class="w-1/2 bg-gray-200 rounded-full h-4">
                        <div class="bg-pink-600 h-4 rounded-full" style="width: ${progress}%"></div>
                    </div>
                    ${
                      answers[currentQuestion] == '' ||
                      answersStar[currentQuestion] == ''
                        ? `<button  class=" bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                       Required
                    </button>`
                        : `<button onclick="nextQuestion()"  class=" bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                        ${currentQuestion === questions - 1 ? 'Submit' : 'Next'}
                    </button>`
                    }
                </div>
            </div>
        `;
}
function renderQuestionPage4() {
  const progress = ((currentQuestion + 1) / questions) * 100;

  app.innerHTML = `
            <div class="flex flex-col h-full p-8">
                <img src="logo.png" alt="Logo" class="mb-8 w-24 self-center">
                <h2 class="text-xl font-bold mb-8 text-center">${'Recommendations and Feedback (ข้อเสนอแนะ/ติชม)'}</h2>
                <div class="space-y-4 mb-8 flex-grow">
                    <textarea id="feedbackInput" class="w-full h-24 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"></textarea>
                </div>
                
                
                
                <div class="flex justify-between items-center">
                    ${
                      currentQuestion === 0
                        ? `<button onclick="goToStart()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400">Home</button>`
                        : `<button onclick="previousQuestion()"class="bg-gray-300 px-6 py-3 rounded-full text-xl hover:bg-gray-400" ${
                            currentQuestion === 0 ? 'disabled' : ''
                          }>Previous</button>`
                    }
                    
                    <div class="w-1/2 bg-gray-200 rounded-full h-4">
                        <div class="bg-pink-600 h-4 rounded-full" style="width: ${progress}%"></div>
                    </div>
                    <button onclick="nextQuestion()" class="bg-[#0f513a] text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600">
                        ${currentQuestion === questions - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        `;
}

function renderThanksPage() {
  app.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full p-8">
            <img src="logo.png" alt="Logo" class="mb-8 w-40">
            <h1 class="text-4xl font-bold text-center mb-6">" Thank you for being part
            of our development."</h1>
            <br><br>
            <p class="text-2xl text-center mb-12 text-[#ff668f]">We will fulfill our promise to continually provide
            better quality service.</p>

            <button onclick="goToStart(reset=true)" class="w-full max-w-md bg-[#0f513a] text-white py-4 rounded-full text-2xl hover:bg-pink-600">Review</button>
        </div>
    `;
}

function getFeedBack() {
  const feedbackInput = document.getElementById('feedbackInput').value;
  answers[currentQuestion] = feedbackInput;
}

function startSurvey() {
  currentPage = 'question1';
  renderPage();
}

function startSurvey1() {
  currentPage = 'Start1';
  renderPage();
}

function answerQuestion(answer) {
  answers[currentQuestion] = answer;
  if (currentQuestion === 0) {
    renderQuestionPage1();
  } else if (currentQuestion === 1) {
    try {
      const val = document.getElementById('other1').value;
      answersOther[currentQuestion] = val;
    } catch (error) {
      console.log(error);
    }
    renderQuestionPage2();
  } else if (currentQuestion === 2) {
    try {
      const val = document.getElementById('other2').value;
      answersOther[currentQuestion] = val;
    } catch (error) {
      console.log(error);
    }
    renderQuestionPage3();
  } else if (currentQuestion === 3) {
    renderQuestionPage4();
  }
}
function answerQuestionStar(answer) {
  answersStar[currentQuestion] = answer;
  if (currentQuestion === 0) {
    renderQuestionPage1();
  } else if (currentQuestion === 1) {
    try {
      const val = document.getElementById('other1').value;
      answersOther[currentQuestion] = val;
    } catch (error) {
      console.log(error);
    }
    renderQuestionPage2();
  } else if (currentQuestion === 2) {
    try {
      const val = document.getElementById('other2').value;
      answersOther[currentQuestion] = val;
    } catch (error) {
      console.log(error);
    }
    renderQuestionPage3();
  } else if (currentQuestion === 3) {
    renderQuestionPage4();
  }
}

function nextQuestion() {
  //   if (currentQuestion < questions - 1) {
  //     currentQuestion++;
  //     renderPage();
  //   }
  if (currentQuestion === 3) {
    getFeedBack();
  }

  if (currentQuestion === 0) {
    currentQuestion++;
    currentPage = 'question2';
    renderPage();
  } else if (currentQuestion === 1) {
    currentQuestion++;
    currentPage = 'question3';
    renderPage();
  } else if (currentQuestion === 2) {
    currentQuestion++;
    currentPage = 'question4';
    renderPage();
  } else {
    submitSurvey();
  }
}

function previousQuestion() {
  if (currentQuestion === 3) {
    getFeedBack();
  }

  if (currentQuestion > 0) {
    // currentQuestion--;
    // renderPage();
    if (currentQuestion === 3) {
      currentQuestion--;
      currentPage = 'question3';
      renderPage();
    } else if (currentQuestion === 1) {
      currentQuestion--;
      currentPage = 'question1';
      renderPage();
    } else if (currentQuestion === 2) {
      currentQuestion--;
      currentPage = 'question2';
      renderPage();
    }
  }
}

function submitSurvey() {
  console.log('Submit:', answers, answersStar, answersOther);

  fetch(
    'https://script.google.com/macros/s/AKfycbwNHH24InlmP_pkgAMk4kDXctNe9GBb2XdbPtkPvJHrzJqc8LkhdB7O-tHbtjk6L-IRDg/exec',
    {
      method: 'POST',
      body: JSON.stringify({
        data: [
          [
            new Date().toISOString(),
            answers[0],
            answers[1].includes('Other') ? answersOther[1] : answers[1],
            answersStar[1],
            answers[2].includes('Other') ? answersOther[2] : answers[2],
            answersStar[2],
            answers[3],
          ],
        ],
      }),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  currentPage = 'thanks';
  renderPage();
}

function goToStart(reset = false) {
  currentPage = 'start';
  currentQuestion = 0;
  answers.length = 0;
  if (reset) {
    answers = ['', '', '', ''];
    answersStar = ['', '', '', ''];
    answersOther = ['', '', '', ''];
  }
  renderPage();
}

// startSurvey();

// currentPage = 'question4';
// currentQuestion = 3;
renderPage();
