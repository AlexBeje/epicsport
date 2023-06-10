<template>
  <div class="flex h-full w-full items-center justify-center rounded-3xl p-4">
    <p v-if="loading">Loading ...</p>
    <div v-else class="flex flex-col items-center gap-6">
      <p v-if="emailSent" class="-mb-2 text-2xl">{{ emailSent }}</p>
      <input
        v-model="email"
        type="text"
        class="bg-black p-2 text-white"
        @keyup.enter="sendEmail"
      />
      <button withPadding @click="sendEmail">Send</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** Variables **/
const email = ref("");
const loading = ref(false);
const emailSent = ref("");
const env = useRuntimeConfig();

/** Methods **/
const sendEmail = async () => {
  const url = "https://api.forwardemail.net/v1/emails";
  const apiKey = env.public.forwardEmailApiKey;
  const data = new URLSearchParams();

  data.append("from", "web@epicsport.es");
  data.append("to", "epicsportcenter@gmail.com");
  data.append("subject", "From epicsport.es");
  data.append("text", `${email.value}`);

  loading.value = true;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${apiKey}:`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data.toString(),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loading.value = false;
      if (data.error) {
        emailSent.value = getErrorMessage(data.error);
        return;
      }
      emailSent.value = "Email Sent!";
      email.value = "";
    })
    .catch((error: string) => {
      loading.value = false;
      getErrorMessage(error);
    });
};

const getErrorMessage = (error: string) => {
  console.error("Error:", error);
  return "There has been an error, the email could not be sent. Contact me at 642 954 953.";
};
</script>
