import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";


const Categories = () => {
    return (
       <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map(item=><CategoryBox
                icon={item.icon}
                label={item.label}
                key={item.label}
            ></CategoryBox>)}
        </div>
       </Container>
    );
};

export default Categories;