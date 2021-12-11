#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    char string[255];

    fgets(string, sizeof string, stdin);
    printf("%s", string);

    fgets(string, sizeof string, stdin);
    printf("%s", string);

    fgets(string, sizeof string, stdin);
    printf("%s", string);

    return EXIT_SUCCESS;
}
