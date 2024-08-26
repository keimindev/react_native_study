import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, handlePress, containerStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles}
      }`}
    >
      <Text className="text-primary font-psemibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
