import{G as d}from"./GuestLayout.a499304b.js";import{T as u,I as c}from"./TextInput.b1f5615b.js";import{P as p}from"./PrimaryButton.bf4eee23.js";import{u as w,j as t,a as e,H as f}from"./app.a8be48e8.js";import"./ApplicationLogo.e669e104.js";function v({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=w({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(d,{children:[e(f,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(u,{id:"password",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(c,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{v as default};