export const setContext = context => {
  sessionStorage.setItem("Context", context);
  console.log(context);
};

export const getData = async (context, question) => {
  const id = Math.floor(Math.random() * 1000);
  console.log(context, question);
  let data;
  try {
    data = await fetch("http://10.100.56.190:5000/prediction", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        data: [
          {
            title: "Prediction",
            paragraphs: [
              {
                qas: [
                  {
                    question: `${question}`,
                    id: `${id}`,
                  },
                ],
                context: `${context}`,
              },
            ],
          },
        ],
      }),
    });
  } catch (e) {
    return await new Promise(function (resolve) {
      resolve("I guess the network is not well.");
    });
  }
  if (data.status !== 200) {
    return await new Promise(function (resolve) {
      resolve("I guess the Server is not well.");
    });
  }
  let output = await data.json();
  if (output.prediction[`${id}`] === "")
    return "The model didn't find the relevant answer to the question in the given context.";
  return output.prediction[`${id}`];
};
