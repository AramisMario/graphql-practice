import {tasks} from "./sample";
import User from "./models/user";
export const resolvers = {
    Query:{
        hello: () =>{
            return 'Hello World with GraphQL'
        },
        greet: (root, args,ctx)=>{ // args can be replaced with destructuring format {name}
            console.log(args.name);
            console.log(ctx.message);
            return `hello! ${args.name}`;
        },
        tasks(){
            return tasks;
        },
        async users(){
            const users = await User.find();
            return users;
        }
    },
    Mutation:{
        createTask: (_,{input})=>{
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
         createUser: async (_,{input})=>{
            const user = new User(input);
            console.log(user);
            await user.save();
            return user;
        },
        deleteUser: async (_,{_id}) =>{
            const userDeleted = await User.findByIdAndDelete(_id);
            return userDeleted;
        },
        updateUser: async (_,{_id,input}) =>{
            return await User.findByIdAndUpdate(_id,input,{new:true});
        }
    }
};