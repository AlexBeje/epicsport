<template>
  <div class="h-full w-full items-center flex justify-center p-4 rounded-3xl">
    <p v-if="loading">Loading ...</p>
    <div v-else class="flex flex-col gap-6 items-center">
      <p v-if="emailSent" class="text-2xl -mb-2">{{ emailSent }}</p>
      <input
        type="text"
        v-model="email"
        class="bg-black text-white p-2"
        @keyup.enter="sendEmail"
      />
      <Button @click="sendEmail" withPadding>Send</Button>
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
  fetch(url, {
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
