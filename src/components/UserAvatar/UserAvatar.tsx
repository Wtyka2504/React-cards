/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
export type User = {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
};

export function UserAvatar({ name, picture }: User) {
  return (
    <div>
      <img
        src={picture}
        alt=""
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <p>Cześć, {name}!</p>
    </div>
  );
}
