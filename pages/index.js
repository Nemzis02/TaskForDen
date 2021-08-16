import { useState } from "react";
import generator from "generate-password";

import Head from "next/head";
import Selector from "../components/Selector/Selector";
import Checkbox from "../components/Checkbox/Checkbox";
import TextInput from "../components/TextInput/TextInput";
import Clipboard from "../components/Clipboard/Clipboard";
import styles from "./index.module.scss";

const passwordLengthOptions = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 14,
    label: "14",
  },
];

const initialValues = {
  passwordLength: "5",
  passwordDigits: false,
};

export default function Home() {
  const [values, setValues] = useState(initialValues);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newPassword = generator.generate({
      length: Number(values.passwordLength),
      numbers: values.passwordDigits,
    });

    setGeneratedPassword(newPassword);
  };

  const onInputChange = (e) => {
    const { type, value, checked, name } = e.target;
    if (type === "checkbox") {
      return setValues((values) => ({ ...values, [name]: checked }));
    }

    return setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Generate password form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <form className={styles.form} onSubmit={onFormSubmit} values={values}>
          <div className={styles.row}>
            <Selector
              label="Select the password length"
              id="password-length"
              options={passwordLengthOptions}
              name="passwordLength"
              value={values.passwordLength}
              onChange={onInputChange}
            />
          </div>
          <div className={styles.row}>
            <Checkbox
              name="passwordDigits"
              id="password-digits"
              label="Use digits in the password"
              checked={values.passwordDigits}
              onChange={onInputChange}
            />
          </div>
          <div className={styles.row}>
            <button className={styles.button} type="submit">
              Generate password
            </button>
          </div>
        </form>
        {generatedPassword && (
          <div className={styles.passwordInputContainer}>
            <TextInput
              disabled
              value={generatedPassword}
              name="generated-password"
              className={styles.input}
            />

            <Clipboard copyText={generatedPassword}>
              <button>Copy password</button>
            </Clipboard>
          </div>
        )}
      </div>
    </div>
  );
}
