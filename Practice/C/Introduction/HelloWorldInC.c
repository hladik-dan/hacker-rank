#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    char string[255];
    fgets(string, sizeof string, stdin);

    printf("Hello, World!\n");
    printf("%s\n", string);

    return EXIT_SUCCESS;
}
