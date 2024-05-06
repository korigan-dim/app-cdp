<template>
    <main>
        <section id="contact">
            <PageTitle :category="$t(`categories.contact`)" :title="$t(`titles.contact`)" :lg="true"/>

            <form action="" method="POST" class="container">
                <div class="block50">
                    <label for="firstname">{{ $t("contact.form.firstname") }}</label>
                    <input type="text" id="firstname" name="firstname" required>
                    <label for="lastname">{{ $t("contact.form.lastname") }}</label>
                    <input type="text" id="lastname" name="lastname" required>
                    <label for="mail">{{ $t("contact.form.mail") }}</label>
                    <input type="text" id="mail" name="mail" required>
                    <label for="phone">{{ $t("contact.form.phone") }}</label>
                    <input type="text" id="phone" name="phone">
                </div>
                <div class="block50">
                    <label for="subject">{{ $t("contact.form.subject") }}</label>
                    <input type="text" id="subject" name="subject" required>
                    <label for="textarea">{{ $t("contact.form.message") }}</label>
                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                    <div ref="container" class="frc-captcha" data-sitekey="FCMH02QDC9B8G9SL"></div>
                    <button type="submit" class="btn">{{ $t("contact.form.send") }}</button>
                </div>
            </form>
        </section>
    </main>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: "Prenez contact avec notre association",
        description: "Vous êtes un partenaires et souhaitez rejoindre l'aventure Les Puits du Désert ? Écrivez-nous. Vous êtes un particulier et avez une question ? Nous sommes à votre écoute."
    });

    import { WidgetInstance } from "friendly-challenge";
    import { ref, onMounted, onUnmounted } from "vue";

    const container = ref();
    const widget = ref();
    const siteKey = "";

    const doneCallback = (solution) => {
        console.log('Captcha was solved. The form can be submitted.');
        console.log(solution);
    };

    const errorCallback = (err) => {
        console.log('There was an error when trying to solve the Captcha.');
        console.log(err);
    };

    onMounted(() => {
        if (container.value) {
            widget.value = new WidgetInstance(container.value, {
                startMode: "auto",
                doneCallback,
                errorCallback
            });
        }
    });

    onUnmounted(() => {
        if (widget.value) {
            widget.value.destroy();
        }
    });
</script>

<style scoped>
    #contact .container {
        gap: 2em;
        padding-bottom: 7em;
    }
    #contact .block50 {
        display: flex;
        flex-flow: column wrap;
        text-align: left;
    }
    #contact .block50 input, #contact .block50 textarea {
        padding: 12px 24px;
        margin: 10px 0;
    }
    #contact .block50 .btn {
        margin-top: 1em;
    }
    .frc-captcha {
        max-width: 100vw !important;
        margin: 4px 0 10px 0;
    }
</style>